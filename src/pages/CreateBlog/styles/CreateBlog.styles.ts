export const CreateBlogMainContainerStyle = (theme: boolean) => {
  return {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme ? "primary.dark" : "primary.main",
  };
};

export const CreateBlogSecondaryContainerStyle = {
  width: "1000px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
};

export const CreateTextFieldStyle = { my: 2 };

export const CreateBlogSubmitButtonStyle = (theme: boolean) => {
  return {
    my: 2,
    color: theme ? "primary.contrastText" : "secondary.contrastText",
    backgroundColor: theme ? "primary.main" : "primary.dark",
    "&:hover": {
      color: theme ? "secondary.contrastText" : "primary.contrastText",
      backgroundColor: theme ? "primary.dark" : "secondary.contrastText",
    },
  };
};

export const CreateBlogTypeSelectStyle = (theme: boolean) => {
  return {
    width: 200,
    color: theme ? "secondary.contrastText" : "primary.contrastText",
    mb: 2,
  };
};
