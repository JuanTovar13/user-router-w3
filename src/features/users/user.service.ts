import { CreateUserDTO, User } from './user.types';

export class UserService {
  private users: User[];

  constructor() {
    this.users = [];
  }

  getUsers = (): User[] => {
    return this.users;
  };

  createUser = (user: CreateUserDTO): User => {
    const newUser: User = {
      id: new Date().getTime().toString(),
      name: user.name,
      email: user.email,
    };

    this.users.push(newUser);

    return newUser;
  };

  deleteUser = (userId: string): void => {
    this.users = this.users.filter((user) => user.id !== userId);
  };
}
