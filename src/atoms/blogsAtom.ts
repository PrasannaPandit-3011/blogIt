import { atom } from "jotai";
import { BlogObj } from "../model";

export const blogsAtom = atom<BlogObj>([]);
export const filteredBlogsAtom = atom<BlogObj>([]);
export const loadingAtom = atom<boolean>(false);
