export const DragAndDropContainerStyle = {
  mb: 2,
  width: 0.6,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
};

export const DragAndDropTitleStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  mb: 1,
};

export const DragAndDropMainStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  p: 3,
  border: 1,
  borderColor: "divider",
  width: 0.6,
  mx: "auto",
  borderRadius: 2,
  cursor: "pointer",
};

export const DragAndDropDropIconStyle = (theme: boolean) => {
  return {
    mb: 1,
    fontSize: 64,
    color: theme ? "secondary.contrastText" : "primary.contrastText",
  };
};

export const DragAndDropDropTextStyle = {
  my: 2,
};
