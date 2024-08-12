import React, { useState } from "react";
import { BlogProp } from "../../../model";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { themeAtom, userAtom } from "../../../atoms";
import { useAtomValue } from "jotai";
import {
  AuthorStyle,
  CommentBoxStyle,
  CommentButtonContainerStyle,
  CommentButtonStyle,
  CommentsContainerStyle,
  CommentTitleStyle,
  CommentTitleTypographyStyle,
  DisplayCommentContainerStyle,
  DisplayCommentStyle,
  FontStyle,
  SecondaryDisplayCommentContainerStyle,
} from "../styles";

const BlogComments: React.FC<BlogProp> = ({ blog }) => {
  const theme = useAtomValue(themeAtom);
  const user = useAtomValue(userAtom);
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<string[]>(blog?.comments ?? []);
  const createdAtDate = blog?.createdAt ? new Date(blog.createdAt) : null;

  const handleAddComment = () => {
    if (comment === "") {
      return;
    }
    setComments([comment, ...comments]);
    setComment("");
  };

  return (
    <Box sx={CommentsContainerStyle}>
      <Box sx={{ mt: 2 }}>
        <Divider variant="fullWidth" orientation="horizontal" />
      </Box>

      <Badge
        badgeContent={comments.length}
        color="secondary"
        sx={CommentTitleStyle}
      >
        <Typography
          variant="h4"
          color={FontStyle(theme)}
          fontWeight={"bold"}
          sx={CommentTitleTypographyStyle}
        >
          Comments
        </Typography>
      </Badge>
      <Box sx={CommentBoxStyle}>
        <TextField
          autoFocus={false}
          value={comment}
          multiline={true}
          fullWidth
          rows={8}
          placeholder="Write some comment about the blog...."
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setComment(event.target.value);
          }}
          sx={{
            mb: 1,
          }}
        />
        <Box sx={CommentButtonContainerStyle}>
          <Button
            variant="contained"
            sx={CommentButtonStyle(theme)}
            onClick={() => handleAddComment()}
          >
            Post Comment
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          mb: 10,
        }}
      >
        <Box>
          <Divider variant="fullWidth" orientation="horizontal" />
        </Box>
        {comments.map((c, i) => (
          <Box
            key={i}
            color={FontStyle(theme)}
            py={3}
            sx={DisplayCommentContainerStyle}
          >
            <Box display={"flex"} sx={SecondaryDisplayCommentContainerStyle}>
              <Avatar src="https://source.unsplash.com/random?person" />
              <Box>
                <Typography
                  variant="body1"
                  fontWeight={"bold"}
                  color={FontStyle(theme)}
                  sx={AuthorStyle}
                >
                  {user.name}
                </Typography>
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
            <Box>
              <Typography
                variant="body2"
                color={FontStyle(theme)}
                fontWeight={"bold"}
                sx={DisplayCommentStyle}
              >
                {c}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BlogComments;
