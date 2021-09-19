import ApiBase from '../api';

let instance = null;

class PostsService extends ApiBase {
  static get instance() {
    if (instance === null) {
      instance = new PostsService();
    }

    return instance;
  }

  getPosts() {
    return this.get('/todos');
  }
}

export default PostsService;
