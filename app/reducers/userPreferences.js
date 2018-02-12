import { Map, List } from 'immutable';

import types from '../actions/actions';

export const userPreferences = ( state = Map({
  language: 'en',
  theme: 'default'
}), action ) => {
  switch ( action.type ) {
  case types.SWITCH_LANGUAGE:
    return state.set( 'language', action.language );
  case types.SWITCH_THEME:
    return state.set( 'theme', action.theme )
  }

  return state;
}
