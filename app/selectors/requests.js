import { createSelector } from 'reselect';

export const getRequestPoints = state =>  state.requests.get('points');

export const getAllRequestPoints = createSelector(
  [getRequestPoints],
  (requests) => {
    return requests.valueSeq()
  }
);
