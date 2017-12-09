import { Map, List } from 'immutable';

import {MESSAGES_FETCH_SUCCESS, SET_ACTIVE_USER, SEND_MESSAGE} from '../actions/actions';

export const messages = ( state = Map({
  messages: List([]),
  activeUser: -1
}), action ) => {
  switch (action.type) {
  case MESSAGES_FETCH_SUCCESS:
    return state.set('messages', action.messages );
  case SET_ACTIVE_USER:
    return state.set('activeUser', action.userID );
  case SEND_MESSAGE:
    return state.update('messages', messages => messages.push(action.message));
  }

  return state;
}
