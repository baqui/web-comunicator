import { Map, List } from 'immutable';

import { SWITCH_LANGUAGE, SWITCH_THEME } from '../actions/actions';

export const userPreferences = ( state = Map({
  language: 'en',
  theme: 'default'
}), action ) => {
  switch ( action.type ) {
  case SWITCH_LANGUAGE:
    return state.set( 'language', action.language );
  case SWITCH_THEME:
    return state.set( 'theme', action.theme )
  }

  return state;
}
