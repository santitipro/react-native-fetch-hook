import {BASE_URL} from '@Config';

class ApiBase {
  constructor() {
    this.baseUrl = BASE_URL;
  }

  get = async url => {
    const response = await fetch(`${this.baseUrl}${url}`);
    const json = await response.json();
    return json;
  };

  post = async (url, body) => {
    throw new Error('Not implemented');
  };
}

export default ApiBase;
