import {REQUEST_POINTS_FETCH_SUCCESS} from './actions';
import {storeGoogleMap} from './google-maps-actions';
import RestClient from '../models/RestClient.js';
import {normalizedRequestPointsResponse} from '../models/normalizers.js';

export const mapLoaded = (map) => dispatch => storeGoogleMap(map);

export const requestPointsFetchSuccess = (requests) => {
  return {
    type: REQUEST_POINTS_FETCH_SUCCESS,
    requests: normalizedRequestPointsResponse(requests)
  }
};

export const requestsPointsFetchData = () => {
  return (dispatch) => {
    RestClient.getAllRequestsPoints().then(
      (response) => {
        dispatch( requestPointsFetchSuccess(response) );
      },
      () => {//error
        throw "An error occured during requestPoints fetching";
      }
    );
  }
};
