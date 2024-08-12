export const TabStyles = (theme: boolean) => {
  return {
    "& .MuiTab-root": {
      color: theme ? "white" : "#000",
      fontWeight: 400,
    },
    "& .Mui-selected": {
      fontWeight: 700,
      color: theme ? "white" : "#000",
    },
  };
};

export const TabContainerStyles = { maxWidth: 480, flexGrow: 1 };
