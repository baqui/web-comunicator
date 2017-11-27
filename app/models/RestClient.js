import axios from 'axios';

import {urls} from './urls';
import './kakapo-server';


export default class MarketPlaceRestClient {

  static getOffersList() {
    return this.makeRequest( urls.OFFERS_LIST, { method: 'GET' });
  }

  static getAllRequestsPoints() {
    return this.makeRequest( urls.REQUSTS_POINTS, { method: 'GET' });
  }

  static getSelfUser() {
    return this.makeRequest( urls.USER_AUTH, { method: 'GET' } );
  }

  static makeRequest(subPath, options) {
    if (options.method !== 'GET') {
      const headers = options.headers || {};
      if (!headers['Content-Type']) {
        headers['Content-Type'] = 'application/json';
      }
      options.headers = headers;

      if (typeof options.body !== 'string') {
        options.body = JSON.stringify(options.body);
      }
    }

    if(!options.credentials) {
      options.credentials = 'same-origin';
    }

    return axios(`${API_URL}/${subPath.replace(/^\//, '')}`, options);
  }

}
