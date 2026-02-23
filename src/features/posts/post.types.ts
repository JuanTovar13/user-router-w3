export interface User {
  id: string;
  name: string;
  email: string;
}

export interface CreateUserDTO {
  name: string;
  email: string;
}

export interface Post {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

export interface CreatePostDTO {
  title: string;
  imageUrl: string;
  description: string;
}
