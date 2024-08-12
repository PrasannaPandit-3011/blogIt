import { Button, Typography } from "@mui/material";
import React from "react";
import { IconStyle, MenuNavigationItem } from "../styles";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../../atoms";
import Navigate from "../../Common/Components/Navigate";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { BlogFunctionalityProps } from "../../../model/BlogFunctionalityType";

const EditBlogButton: React.FC<BlogFunctionalityProps> = ({ id }) => {
  const theme = useAtomValue(themeAtom);
  const { handleNavigate } = Navigate();
  return (
    <Button
      sx={MenuNavigationItem(theme)}
      onClick={() => handleNavigate(`/edit/${id}`)}
    >
      <EditRoundedIcon sx={IconStyle} />
      <Typography variant="body2">Edit</Typography>
    </Button>
  );
};

export default EditBlogButton;
