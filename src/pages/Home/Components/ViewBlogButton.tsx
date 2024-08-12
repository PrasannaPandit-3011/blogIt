import { IconStyle, MenuNavigationItem } from "../styles";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import { Button, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../../atoms";
import Navigate from "../../Common/Components/Navigate";
import { BlogFunctionalityProps } from "../../../model/BlogFunctionalityType";

const ViewBlogButton: React.FC<BlogFunctionalityProps> = ({ id }) => {
  const theme = useAtomValue(themeAtom);
  const { handleNavigate } = Navigate();
  return (
    <Button
      sx={MenuNavigationItem(theme)}
      onClick={() => handleNavigate(`/blogs/${id}`)}
    >
      <RemoveRedEyeRoundedIcon sx={IconStyle} />
      <Typography variant="body2">View</Typography>
    </Button>
  );
};

export default ViewBlogButton;
