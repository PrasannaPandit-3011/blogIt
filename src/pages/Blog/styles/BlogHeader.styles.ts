export const TitleStyle = (theme: boolean) => {
  return {
    width: 0.8,
    mb: 1,
    ml: 1.5,
    color: theme ? "secondary.contrastText" : "primary.contrastText",
  };
};

export const TitleContainerStyle = {
  width: 0.8,
  mb: 1,
  display: "flex",
  justifyContent: "space-between",
};

export const FontStyle = (theme: boolean) => {
  return theme ? "secondary.contrastText" : "#212b36";
};

export const AuthorStyle = {
  ml: 1,
};

export const PublishedStyle = {
  ml: 1,
  mr: 0.5,
};

export const LikeButtonStyle = { color: "#ff0000" };
