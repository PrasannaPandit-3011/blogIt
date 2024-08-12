import { useAtom, useSetAtom } from "jotai";
import { signUpType } from "../model/AuthTypes";
import axios from "axios";
import toast from "react-hot-toast";
import Navigate from "../pages/Common/Components/Navigate";
import { loadingAtom, userAtom } from "../atoms";

const useSignUp = () => {
  const { handleNavigate } = Navigate();
  const setUser = useSetAtom(userAtom);
  const [loading, setLoading] = useAtom(loadingAtom);

  const onSignUp = async (data: signUpType) => {
    try {
      setLoading(true);
      const response = await axios.post(`/api/signup`, {
        firstName: data.firstName,
        lastName: data.lastName,
        name: `${data.firstName} ${data.lastName}`,
        email: data.email.toLowerCase(),
        password: data.password,
      });
      setLoading(false);
      loading === false && setUser(response.data.user);
      handleNavigate("/");
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Account not created");
      console.log(error);
    }
  };

  return {
    onSignUp,
  };
};

export default useSignUp;
