import { Blog } from "./BlogType";

export interface BlogProp {
  blog: Partial<Blog>;
}

export interface BlogContentProp {
  content: string;
}
export type BlogHeaderType extends BlogProp & {
  handleLike: () => void;
  handleUnlike: () => void;
}

export interface LikeButtonType extends BlogHeaderType {
  like: boolean;
  setLike: React.Dispatch<React.SetStateAction<boolean>>;
}
