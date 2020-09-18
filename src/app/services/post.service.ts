import { Post } from '../models/post.model'

export class PostService {
  posts: Post[] = []

  getPosts() {
    return this.posts
  }

  addPost(post: Post) {
    this.posts.push(post)
  }
}
