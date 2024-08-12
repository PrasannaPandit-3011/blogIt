import { Button, Typography } from "@mui/material";
import React from "react";
import { IconStyle, MenuDeleteButton } from "../styles";
import useBlogAtom from "../../../hooks/useBlogAtom";
import { BlogFunctionalityProps } from "../../../model/BlogFunctionalityType";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const DeleteButton: React.FC<BlogFunctionalityProps> = ({ id }) => {
  const { deleteBlog } = useBlogAtom();
  return (
    <Button sx={MenuDeleteButton} onClick={() => deleteBlog(id)}>
      <DeleteRoundedIcon sx={IconStyle} />
      <Typography variant="body2" color={"#ff0000"}>
        Delete
      </Typography>
    </Button>
  );
};

export default DeleteButton;
