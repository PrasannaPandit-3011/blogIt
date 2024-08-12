import { Box, IconButton, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAtomValue } from "jotai";
import { themeAtom, userAtom } from "../../../atoms";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import {
  MenuButtonContainer,
  MenuContainer,
  StatsContainerStyle,
  StatsIconStyle,
} from "../styles";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Blog } from "../../../model";
import ViewBlogButton from "./ViewBlogButton";
import EditBlogButton from "./EditBlogButton";
import DeleteButton from "./DeleteButton";

const Menu: React.FC<Blog> = (blog) => {
  const [open, setOpen] = useState<boolean>(false);
  const user = useAtomValue(userAtom);
  const theme = useAtomValue(themeAtom);

  return (
    <>
      <Box sx={MenuButtonContainer}>
        <IconButton onClick={() => setOpen((prev) => !prev)}>
          <MoreHorizRoundedIcon />
        </IconButton>
        <Box sx={StatsContainerStyle}>
          <CommentRoundedIcon sx={StatsIconStyle(theme)} />
          <Typography>{blog.comments.length}</Typography>
          <FavoriteIcon sx={StatsIconStyle(theme)} />
          <Typography>{blog.likes}</Typography>
        </Box>
      </Box>

      {open && (
        <Paper elevation={10} sx={MenuContainer(theme)}>
          <ViewBlogButton id={blog.id} />
          {user.id === blog?.author?.id && (
            <>
              <EditBlogButton id={blog.id} />
              <DeleteButton id={blog.id} />
            </>
          )}
        </Paper>
      )}
    </>
  );
};

export default Menu;
