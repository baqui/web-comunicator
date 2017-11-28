import { Map } from 'immutable';

import {
  USER_LOGGED,
} from '../actions/actions';

export const user = (state = Map({ user: undefined }), action) => {
  switch (action.type) {
  case USER_LOGGED:
    return state.set('user', action.user);
  }
  return state;
}
