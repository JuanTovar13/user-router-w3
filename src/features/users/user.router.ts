import { Router } from 'express';
import { UserController } from './user.controller';

export class UserRouter {
  public router: Router;
  private userController: UserController;
  constructor(userController: UserController) {
    this.userController = userController;

    this.router = Router();
    this.router.get('/users', this.userController.getUser);

    this.router.post('/users', this.userController.createUser);

    this.router.delete('/users/:id', this.userController.deleteUser);
  }
}
