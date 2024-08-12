export const SignUpContainerStyles = (theme: boolean) => {
  return {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme ? "primary.dark" : "primary.main",
  };
};

export const SignUpLogoStyles = { width: 0.2, height: 0.2, mx: "auto", mt: 5 };
