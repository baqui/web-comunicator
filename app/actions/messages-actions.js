import {SEND_MESSAGE, MESSAGES_FETCH_SUCCESS, SET_ACTIVE_USER} from './actions';
import RestClient from '../models/RestClient.js';
import {normalizedMessagesListResponse, normalizedMessage} from '../models/normalizers.js';

export const messagesListFetchSuccess = (messages) => ({
  type: MESSAGES_FETCH_SUCCESS,
  messages: normalizedMessagesListResponse(messages)
});

export const messagesListFetchData = (userID) => {
  return (dispatch) => {
    RestClient.getAllMessages(userID).then(
      (response) => {
        dispatch( messagesListFetchSuccess(response) );
      },
      () => {//error
        throw "An error occured during messages list data fetching";
      }
    );
  }
};

export const setActiveUser = (userID) => ({
  type: SET_ACTIVE_USER,
  userID
})

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message: normalizedMessage(message)
})
