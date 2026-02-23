
import { CreatePostDTO, Post } from './post.types';
import Boom from '@hapi/boom';

export class PostService {
  private posts: Post[];

  constructor() {
    this.posts = [];
  }

  getPosts = (): Post[] => {
    return this.posts;
  };

  createPost = (post: CreatePostDTO): Post => {
    const newPost: Post = {
      id: new Date().getTime().toString(),
      title: post.title,
      imageUrl: post.imageUrl,
      description: post.description,
    };

    this.posts.push(newPost);

    return newPost;
  };

  deletePost = (postId: string): void => {
    const postFound = this.posts.find((post) => post.id === postId);
    if (!postFound) {
      throw Boom.notFound('post not found');
    }

    this.posts = this.posts.filter((post) => post.id !== postId);
  };
}
