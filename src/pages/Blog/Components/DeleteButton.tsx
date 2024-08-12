import { IconButton } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import useBlogAtom from "../../../hooks/useBlogAtom";
import Navigate from "../../Common/Components/Navigate";
import { BlogFunctionalityProps } from "../../../model/BlogFunctionalityType";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../../atoms";

const DeleteButton: React.FC<BlogFunctionalityProps> = ({ id }) => {
  const { deleteBlog } = useBlogAtom();
  const { handleNavigate } = Navigate();
  const theme = useAtomValue(themeAtom);

  const handleDelete = (id: string) => {
    deleteBlog(id);
    handleNavigate("/");
  };
  return (
    <IconButton
      sx={{
        color: theme ? "primary.main" : "primary.dark",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => handleDelete(id)}
    >
      <DeleteRoundedIcon fontSize="medium" />
    </IconButton>
  );
};

export default DeleteButton;
