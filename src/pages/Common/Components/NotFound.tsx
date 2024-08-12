import { Avatar, Box, IconButton, Link, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../../atoms";
import { darkLogo, logo } from "../../../assets";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { FontStyle } from "../../Blog/styles/BlogHeader.styles";
import {
  NotFoundContainerStyles,
  NotFoundLinkStyles,
  NotFoundLogoStyles,
  NotFoundTitleStyles,
} from "../styles";
import Navigate from "./Navigate";
import { Paths } from "../../../enums/paths.enums";

const NotFound = () => {
  const theme = useAtomValue(themeAtom);
  const { handleNavigate } = Navigate();

  return (
    <Box sx={NotFoundContainerStyles}>
      <Typography
        variant={"h2"}
        color={FontStyle(theme)}
        sx={NotFoundTitleStyles}
      >
        Are you lost?
      </Typography>
      {theme ? (
        <Avatar variant="square" src={darkLogo} sx={NotFoundLogoStyles} />
      ) : (
        <Avatar variant="square" src={logo} sx={NotFoundLogoStyles} />
      )}
      <Link
        variant={"h5"}
        color={FontStyle(theme)}
        onClick={() => handleNavigate(Paths.HOME)}
        sx={NotFoundLinkStyles}
      >
        <IconButton>
          <ArrowBackRoundedIcon />
        </IconButton>
        Head Back Home (Click right here)
      </Link>
    </Box>
  );
};

export default NotFound;
