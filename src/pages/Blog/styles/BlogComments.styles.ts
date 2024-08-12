export const CommentsContainerStyle = {
  width: 0.8,
};

export const CommentTitleStyle = {
  mt: 3,
};

export const CommentTitleTypographyStyle = {
  mr: 1,
};

export const CommentBoxStyle = {
  width: 700,
  maxWidth: "100%",
  mb: 5,
  mt: 1,
};

export const CommentButtonContainerStyle = {
  width: 1,
  display: "flex",
  justifyContent: "end",
};

export const CommentButtonStyle = (theme: boolean) => {
  return {
    mt: 2,
    color: theme ? "primary.contrastText" : "secondary.contrastText",
    backgroundColor: theme ? "primary.main" : "primary.dark",
    fontWeight: "bold",
    "&:hover": {
      color: theme ? "secondary.contrastText" : "primary.contrastText",
      backgroundColor: theme ? "primary.dark" : "secondary.contrastText",
    },
  };
};

export const DisplayCommentContainerStyle = {
  my: 4,
  border: 1,
  width: 0.7,
  borderRadius: 2,
};

export const SecondaryDisplayCommentContainerStyle = {
  mb: 1,
  ml: 1,
};

export const DisplayCommentStyle = {
  ml: 2,
};
