import types from './actions';
import WSClient from '../models/WSClient';
import RestClient from '../models/RestClient.js';
import {normalizedMessagesListResponse, normalizedMessage} from '../models/normalizers.js';

export const messagesListFetchSuccess = (messages) => ({
  type: types.MESSAGES_FETCH_SUCCESS,
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
  type: types.SET_ACTIVE_USER,
  userID
})

export const sendMessage = (message) => {
  return (dispatch) => {
    WSClient.send(message);
    dispatch( sendRestMessage(message) );
  }
}

export const sendRestMessage = (message) => ({
  type: types.SEND_MESSAGE,
  message: normalizedMessage(message)
});

export const getMessage = (message) => ({
  type: types.GET_MESSAGE,
  message: normalizedMessage(message)
})
