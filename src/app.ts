import express, { Router } from 'express';
import { NODE_ENV, PORT } from './config';
import cors from 'cors';
import { errorsMiddleware } from './middlewares/errorsMiddleware';
import { PostController } from './features/posts/post.controller';
import { PostRouter } from './features/posts/post.router';
import { PostService } from './features/posts/post.service';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log(req.query);
  return res.send('Hello World');
});

const apiRouter = Router();

app.use('/api', apiRouter);

const postService = new PostService();

const postController = new PostController(postService);

const postRouter = new PostRouter(postController);
apiRouter.use(postRouter.router);

app.use(errorsMiddleware);

if (NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
