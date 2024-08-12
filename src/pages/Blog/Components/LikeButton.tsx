import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useAtomValue } from "jotai";
import { LikeButtonType } from "../../../model";
import { themeAtom } from "../../../atoms";
import { FontStyle, LikeButtonStyle } from "../styles";

const LikeButton: React.FC<LikeButtonType> = ({
  blog,
  handleLike,
  handleUnlike,
  like,
  setLike,
}) => {
  const theme = useAtomValue(themeAtom);
  const handleIncLike = () => {
    setLike((prev) => !prev);
    handleLike();
  };

  const handleDecLike = () => {
    setLike((prev) => !prev);
    handleUnlike();
  };
  return like ? (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <IconButton
        onClick={() => {
          handleDecLike();
        }}
      >
        <FavoriteIcon sx={LikeButtonStyle} />
      </IconButton>
      <Typography
        variant="body1"
        fontWeight="bold"
        color={FontStyle(theme)}
        sx={{
          mt: 1.1,
          ml: 0.2,
        }}
      >
        {blog?.likes}
      </Typography>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <IconButton
        onClick={() => {
          handleIncLike();
        }}
      >
        <FavoriteBorderRoundedIcon
          sx={{
            color: FontStyle(theme),
          }}
        />
      </IconButton>
      <Typography
        variant="body1"
        fontWeight="bold"
        color={FontStyle(theme)}
        sx={{
          mt: 1.1,
          ml: 0.2,
        }}
      >
        {blog?.likes}
      </Typography>
    </Box>
  );
};

export default LikeButton;
