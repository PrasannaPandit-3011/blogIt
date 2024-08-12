import { createTheme } from "@mui/material";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../atoms";

const Theme = () => {
  const darkMode = useAtomValue(themeAtom);

  const appTheme = createTheme({
    palette: {
      primary: {
        light: "#161c24",
        main: "#FFF",
        dark: "#161c24",
        contrastText: "#000",
      },
      secondary: {
        light: "#000",
        main: "#333333",
        dark: "#212B36",
        contrastText: "#FFF",
      },
      warning: {
        main: "#e5b700",
      },
      mode: darkMode ? "dark" : "light",
    },
  });

  return { appTheme };
};

export default Theme;
