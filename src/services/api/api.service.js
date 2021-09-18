import {BASE_URL} from '@Config';

class ApiService {
  constructor() {
    this.baseURL = BASE_URL;
  }

  get = async url => {
    const response = await fetch(`${this.baseURL}${url}`);
    const json = await response.json();
    return json;
  };
}

export default ApiService;
