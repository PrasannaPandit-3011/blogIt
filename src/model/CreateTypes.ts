import { User } from "./UserType";

export type PostBlogType = {
  author: User;
  title: string;
  content: string;
  type: string;
};
