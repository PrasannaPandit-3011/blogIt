export type logInType = {
  email: string;
  password: string;
};

export type signUpType = logInType & {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
};

export interface AuthProps {
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}
