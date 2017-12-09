import axios from 'axios';

import {urls} from './urls';
import './kakapo-server';


export default class CommunicatorRestClient {

  static getAllContactsData() {
    return this.makeRequest( urls.CONTACTS, { method: 'GET' });
  }

  static getAllMessages(userID) {
    return this.makeRequest( `${urls.MESSAGES}/${userID}`, { method: 'GET' } );
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
