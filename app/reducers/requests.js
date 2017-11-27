import { Map, List } from 'immutable';

import {REQUEST_POINTS_FETCH_SUCCESS} from '../actions/actions';


export const requests = ( state = Map({
  points: List([])
}), action ) => {
  switch (action.type) {
  case REQUEST_POINTS_FETCH_SUCCESS:
    return state.set('points', action.requests );
  }

  return state;
}
