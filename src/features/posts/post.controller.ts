import { PostService } from './post.service';
import { Request, Response } from 'express';
import Boom from '@hapi/boom';


export class PostController {

  private PostService: PostService;

  constructor(PostService: PostService) {
    this.PostService = PostService;
  }

  getPosts = (req: Request, res: Response) => {
    const Posts = this.PostService.getPosts();
    return res.json(Posts);
  };

  createPost = (req: Request, res: Response) => {
    const { title, imageUrl, description } = req.body;

    if (title === undefined) {
      throw Boom.badRequest('Title is required');
    }

    if (imageUrl === undefined) {
      throw Boom.badRequest('Image URL is required');
    }

    if (description === undefined) {
      throw Boom.badRequest('Description is required');
    }

    const Post = this.PostService.createPost({
      title,
      imageUrl,
      description,
    });

    return res.json(Post);
  };

  deletePost = (req: Request, res: Response) => {
    const { id } = req.params;

    this.PostService.deletePost(String(id));

    return res.send('Post deleted');
  };
}
