import { User } from "./UserType";

export type Blog = {
  id: string;
  author: User;
  title: string;
  content: string;
  type: string;
  likes: number;
  comments: string[];
  createdAt: string;
  updatedAt: string;
};

export type BlogObj = Blog[];
