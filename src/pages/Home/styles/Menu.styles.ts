export const MenuButtonContainer = {
  display: "flex",
  justifyContent: "space-between",
  width: 1,
  mt: 3,
  mb: 1,
};

export const MenuContainer = (theme: boolean) => {
  return {
    width: 0.25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: theme ? "secondary.dark" : "primary.main",
    position: "absolute",
    bottom: 72,
    left: 0,
    borderRadius: "16px",
    backdropFilter: "blur(80px)",
  };
};

export const MenuNavigationItem = (theme: boolean) => {
  return {
    color: theme ? "secondary.contrastText" : "primary.contrastText",
    display: "flex",
    justifyContent: "start",
  };
};

export const MenuDeleteButton = {
  color: "#ff0000",
  display: "flex",
  justifyContent: "start",
};
