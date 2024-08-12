import { Blog } from "./BlogType";

export interface TypeProps {
  blogContent: Partial<Blog>;
  setBlogContent: React.Dispatch<React.SetStateAction<Partial<Blog>>>;
}
