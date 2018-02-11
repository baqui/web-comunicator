import { Map, List } from 'immutable';

import types from '../actions/actions';

export const login = ( state = Map({
  contacts: List([])
}), action ) => {
  switch (action.type) {
  case types.CONTACTS_FETCH_SUCCESS:
    return state.set('contacts', action.contacts );
  }

  return state;
}
