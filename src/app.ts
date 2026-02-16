import express, { Router } from 'express';
import { NODE_ENV, PORT } from './config';
import { UserRouter } from './features/users/user.router';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log(req.query);
  return res.send('home');
});

app.get('/users', (req, res) => {
  return res.send('hola mundo');
});

const apiRouter = Router();
apiRouter.use('./api', apiRouter);

const userRouter = new UserRouter();
apiRouter.use(userRouter.router);

if (NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
