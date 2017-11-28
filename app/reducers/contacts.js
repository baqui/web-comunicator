import { Map, List } from 'immutable';

import {CONTACTS_FETCH_SUCCESS} from '../actions/actions';

export const contacts = ( state = Map({
  contacts: List([])
}), action ) => {
  switch (action.type) {
  case CONTACTS_FETCH_SUCCESS:
    return state.set('contacts', action.contacts );
  }

  return state;
}
