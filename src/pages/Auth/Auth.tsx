import { useState } from "react";
import LogIn from "./Components/Login";
import SignUp from "./Components/SignUp";

const Auth = () => {
  const [signUp, setSignUp] = useState<boolean>(false);

  return (
    <div>
      {signUp ? (
        <SignUp setSignUp={setSignUp} />
      ) : (
        <LogIn setSignUp={setSignUp} />
      )}
    </div>
  );
};

export default Auth;
