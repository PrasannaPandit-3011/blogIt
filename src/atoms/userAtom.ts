import { signUpType } from "../model/AuthTypes";
import { atomWithStorage } from "jotai/utils";

export const initialValues = {
  id: "",
  firstName: "",
  lastName: "",
  name: "",
  email: "",
  password: "",
};

export const userAtom = atomWithStorage<signUpType>("user", initialValues);
