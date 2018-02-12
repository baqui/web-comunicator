import { Map, List } from 'immutable';

import types from '../actions/actions';

export const messages = ( state = Map({
  messages: List([]),
  activeUser: -1
}), action ) => {
  switch (action.type) {
  case types.MESSAGES_FETCH_SUCCESS:
    return state.set('messages', action.messages );
  case types.SET_ACTIVE_USER:
    return state.set('activeUser', action.userID );
  case types.SEND_MESSAGE:
    return state.update('messages', messages => messages.push(action.message));
  case types.GET_MESSAGE:
    return state.update('messages', messages => messages.push(action.message));
  }

  return state;
}
