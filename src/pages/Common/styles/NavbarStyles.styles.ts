export const AppBarStyle = (theme: boolean) => {
  return {
    backgroundColor: theme ? "primary.dark" : "primary.main",
    width: "100%",
  };
};

export const ToolBarStyle = {
  outline: "0",
  borderWidth: "0 0 2px",
  borderColor: "#000",
};

export const LogoStyle = {
  width: 250,
  cursor: "pointer",
};

export const ButtonContainerStyle = {
  display: "flex",
  justifyContent: "end",
  alignContent: "flex-end",
  width: "80%",
};

export const NavbarButtonStyle = (theme: boolean) => {
  return {
    color: theme ? "primary.contrastText" : "secondary.contrastText",
    backgroundColor: theme ? "primary.main" : "primary.dark",
    m: 2,
    "&:hover": {
      color: theme ? "secondary.contrastText" : "primary.contrastText",
      backgroundColor: theme ? "primary.dark" : "secondary.contrastText",
    },
  };
};
export const NavbarHomeButtonStyle = (theme: boolean) => {
  return {
    color: theme ? "primary.contrastText" : "secondary.contrastText",
    backgroundColor: theme ? "primary.main" : "primary.dark",
    my: 2,
    "&:hover": {
      color: theme ? "secondary.contrastText" : "primary.contrastText",
      backgroundColor: theme ? "primary.dark" : "secondary.contrastText",
    },
  };
};
