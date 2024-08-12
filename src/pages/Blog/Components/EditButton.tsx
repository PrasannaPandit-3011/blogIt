import { IconButton } from "@mui/material";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import Navigate from "../../Common/Components/Navigate";
import { BlogFunctionalityProps } from "../../../model/BlogFunctionalityType";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../../atoms";

const EditButton: React.FC<BlogFunctionalityProps> = ({ id }) => {
  const { handleNavigate } = Navigate();
  const theme = useAtomValue(themeAtom);
  return (
    <IconButton
      sx={{
        color: theme ? "primary.main" : "primary.dark",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => handleNavigate(`/edit/${id}`)}
    >
      <BorderColorRoundedIcon fontSize="medium" />
    </IconButton>
  );
};

export default EditButton;
