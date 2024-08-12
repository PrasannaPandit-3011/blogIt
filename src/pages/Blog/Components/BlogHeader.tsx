import { useAtomValue } from "jotai";
import { useState } from "react";
import { Avatar, Box, Typography, Divider, IconButton } from "@mui/material";
import { themeAtom, userAtom } from "../../../atoms";
import {
  AuthorStyle,
  FontStyle,
  PublishedStyle,
  TitleContainerStyle,
  TitleStyle,
} from "../styles";
import { BlogHeaderType } from "../../../model/BlogHeaderType";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import LikeButton from "./LikeButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import Navigate from "../../Common/Components/Navigate";
import { Paths } from "../../../enums/paths.enums";

const BlogHeader: React.FC<BlogHeaderType> = ({
  blog,
  handleLike,
  handleUnlike,
}) => {
  const theme = useAtomValue(themeAtom);
  const [like, setLike] = useState<boolean>(false);
  const { handleNavigate } = Navigate();
  const createdAtDate = blog?.createdAt ? new Date(blog.createdAt) : null;
  const user = useAtomValue(userAtom);
  return (
    <>
      <Box
        sx={{
          width: 0.85,
        }}
      >
        <IconButton onClick={() => handleNavigate(Paths.HOME)}>
          <ArrowBackIosNewRoundedIcon />
        </IconButton>
      </Box>
      <Typography variant={"h4"} fontWeight={"bold"} sx={TitleStyle(theme)}>
        {blog?.title}
      </Typography>
      <Box sx={TitleContainerStyle}>
        <Box display={"flex"}>
          <Avatar src="https://source.unsplash.com/random?people" />
          <Box>
            <Typography
              variant="body1"
              fontWeight={"bold"}
              color={FontStyle(theme)}
              sx={AuthorStyle}
            >
              {blog?.author?.name}
            </Typography>
            <Box display="flex">
              <Typography
                variant="body2"
                color={FontStyle(theme)}
                sx={PublishedStyle}
              >
                Published in <b>{blog?.type}</b>
              </Typography>
              <Box
                color={FontStyle(theme)}
                sx={{
                  mr: 0.5,
                }}
              >
                &#x2022;
              </Box>{" "}
              {createdAtDate && (
                <Typography
                  variant="body2"
                  color={FontStyle(theme)}
                  fontWeight={"bold"}
                >
                  {createdAtDate.toDateString().split(" ")[2]}{" "}
                  {createdAtDate.toDateString().split(" ")[1]}{" "}
                  {createdAtDate.toDateString().split(" ")[3]}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {user.id === blog?.author?.id && (
            <>
              <DeleteButton id={blog?.id ?? ""} />
              <EditButton id={blog?.id ?? ""} />
            </>
          )}
          <LikeButton
            blog={blog}
            handleLike={handleLike}
            handleUnlike={handleUnlike}
            like={like}
            setLike={setLike}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: 0.8,
          mb: 2,
        }}
      >
        <Divider variant="fullWidth" orientation="horizontal" />
      </Box>
    </>
  );
};

export default BlogHeader;
