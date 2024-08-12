import Navigate from "../pages/Common/Components/Navigate";
import { useAtom, useSetAtom } from "jotai";
import { loadingAtom, userAtom } from "../atoms";
import { logInType } from "../model";
import axios from "axios";
import toast from "react-hot-toast";

const useLogIn = () => {
  const { handleNavigate } = Navigate();
  const setUser = useSetAtom(userAtom);
  const [loading, setLoading] = useAtom(loadingAtom);

  const onLogIn = async (data: logInType) => {
    try {
      setLoading(true);
      const response = await axios.post(`/api/login`, {
        email: data.email.toLowerCase(),
        password: data.password,
      });
      setLoading(false);
      loading === false && setUser(response.data.user);
      handleNavigate("/");
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Incorrect Credentials");
      setLoading(false);
    }
  };

  return {
    onLogIn,
  };
};

export default useLogIn;
