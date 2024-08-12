import { Box } from "@mui/material";
import { useAtomValue } from "jotai";
import { hourglass } from "ldrs";
import { themeAtom } from "../../../atoms";
import { LoaderContainerStyle } from "../styles";

const Loader = () => {
  const theme = useAtomValue(themeAtom);
  hourglass.register();

  return (
    // Default values shown
    theme ? (
      <Box sx={LoaderContainerStyle}>
        <l-hourglass
          size="80"
          bg-opacity="0.1"
          speed="2.0"
          color="#FFF"
        ></l-hourglass>
      </Box>
    ) : (
      <Box sx={LoaderContainerStyle}>
        <l-hourglass
          size="80"
          bg-opacity="0.1"
          speed="2.0"
          color="#161c24"
        ></l-hourglass>
      </Box>
    )
  );
};

export default Loader;
