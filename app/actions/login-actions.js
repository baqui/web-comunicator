import types from './actions';
import { setCookie } from '../utils/cookieHandler';
import RestClient from '../models/RestClient';
import {
  normalizedMessagesListResponse,
  normalizedMessage} from '../models/normalizers';

// export const messagesListFetchSuccess = (messages) => ({
//   type: types.MESSAGES_FETCH_SUCCESS,
//   messages: normalizedMessagesListResponse(messages)
// });

export const login = (data) => {
  return (dispatch) => {
    RestClient.login(data).then(
      (response) => {
        const {token,jid} = response.data;
        setCookie('token', token);
        setCookie('jid', jid);
        dispatch( redirectToCommunicator() );
      },
      (error) => {//error
        console.log(error);
        throw "Login error";
      }
    );
  }
};

export const register = (data) => {
  return (dispatch) => {
    RestClient.register(data).then(
      (response) => {
        dispatch( redirectToCommunicator() );
      },
      (error) => {//error
        console.log(error);
        throw "Register error";
      }
    );
  }
};

const redirectToCommunicator = () => (dispatch) => {
  window.location = '/communicator';
}
