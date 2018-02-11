import types from './actions';
import RestClient from '../models/RestClient.js';
import WSClient from '../models/WSClient';
import {normalizedContactsListResponse} from '../models/normalizers.js';

export const contactsListFetchSuccess = (contacts) => {
  return {
    type: types.CONTACTS_FETCH_SUCCESS,
    contacts: normalizedContactsListResponse(contacts)
  }
};

export const contactsListFetchData = () => {
  return (dispatch) => {
    RestClient.getAllContactsData().then(
      (response) => {
        dispatch( contactsListFetchSuccess(response) );
      },
      () => {//error
        throw "An error occured during contacts list data fetching";
      }
    );
  }
};
