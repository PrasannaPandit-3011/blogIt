export const CardsContainerStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  gap: "10px",
  padding: "10px",
};

export const MainContainerStyle = (theme: boolean) => {
  return {
    display: "flex",
    borderRadius: "16px",
    justifyContent: "space-between",
    width: 1,
    height: 300,
    backgroundColor: theme ? "secondary.dark" : "primary.main",
    position: "relative",
  };
};

export const CardContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: 1,
};

export const CardTopSectionStyle = {
  display: "flex",
  justifyContent: "space-between",

  width: 1,
  mb: 2,
};

export const TypographyStyle = (theme: boolean) => {
  return theme ? "secondary.contrastText" : "primary.contrastText";
};

export const BlogContentStyle = {
  mt: 1,
  mx: 1,
  display: "flex",
  flexWrap: "wrap",
};

export const CardMediaStyle = (theme: boolean) => {
  return {
    width: 175,
    height: 1,
    borderRadius: "16px",
    backgroundColor: theme ? "secondary.dark" : "primary.main",
  };
};

export const StatsContainerStyle = {
  display: "flex",
  mt: 1,
};

export const StatsIconStyle = (theme: boolean) => {
  return { color: theme ? "primary.main" : "primary.dark", mx: 1 };
};

export const BlogTitleStyle = {
  mx: 1,
  cursor: "pointer",
};
