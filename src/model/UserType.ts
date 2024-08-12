import { Blog } from "./BlogType";

export type User = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  blogs?: Blog[];
};
