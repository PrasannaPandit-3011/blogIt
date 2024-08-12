import { useNavigate } from "react-router";

const Navigate = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return {
    handleNavigate,
  };
};

export default Navigate;
