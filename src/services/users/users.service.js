const {default: ApiService} = require('../api/api.service');

let instance = null;

class UsersService extends ApiService {
  static get instance() {
    if (instance === null) {
      instance = new UsersService();
    }

    return instance;
  }

  getUsers = () => {
    return this.get('/todos');
  };
}

export default UsersService;
