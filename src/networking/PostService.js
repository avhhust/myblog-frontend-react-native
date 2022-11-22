import NetworkProvider from './NetworkProvider';

class PostService {
  async getMostPopularPosts() {
    const posts = await NetworkProvider.getRequest('/top-posts');
    return posts.data;
  }

  async getMostPopularPostsJSON() {
    return await this.getMostPopularPosts().data;
  }
}

export default new PostService;