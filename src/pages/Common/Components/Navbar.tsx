import {
  AppBar,
  Avatar,
  Box,
  Button,
  ClickAwayListener,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  AppBarStyle,
  ButtonContainerStyle,
  LogoStyle,
  NavbarButtonStyle,
  NavbarHomeButtonStyle,
  ToolBarStyle,
} from "../styles";
import DarkModeSwitch from "../../Custom/DarkModeSwitch";
import { useAtom, useSetAtom } from "jotai";
import { darkLogo, logo } from "../../../assets";
import { Paths } from "../../../enums/paths.enums";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { themeAtom, initialValues, userAtom } from "../../../atoms";
import { useState } from "react";

import { HomeRounded } from "@mui/icons-material";
import Navigate from "./Navigate";

const Navbar = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const setUser = useSetAtom(userAtom);

  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);
  const { handleNavigate } = Navigate();

  const handleAvatarClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchor(e.currentTarget);
  };

  const handleLogoutClick = () => {
    setAnchor(null);
    setUser(initialValues);
    localStorage.removeItem("user");
    handleNavigate(Paths.AUTH);
  };
  const handleClickAway = () => {
    setAnchor(null);
  };

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <AppBar elevation={0} position="sticky" sx={AppBarStyle(theme)}>
      <Toolbar sx={ToolBarStyle}>
        {" "}
        <Avatar
          variant="square"
          src={theme ? darkLogo : logo}
          sx={LogoStyle}
          onClick={() => handleNavigate(Paths.HOME)}
        />
        <Box sx={ButtonContainerStyle}>
          <Button sx={NavbarHomeButtonStyle(theme)}>
            <HomeRounded sx={{ mr: 1 }} />
            <Typography
              variant="body2"
              fontWeight="bolder"
              sx={{
                mr: 1,
              }}
              onClick={() => handleNavigate(Paths.HOME)}
            >
              Go Home
            </Typography>
          </Button>
          <Button sx={NavbarButtonStyle(theme)}>
            <Typography
              variant="body2"
              fontWeight="bolder"
              sx={{
                ml: 1,
              }}
              onClick={() => handleNavigate(Paths.CREATE_BLOG)}
            >
              New Blog
            </Typography>
            <AddRoundedIcon sx={{ ml: 1 }} />
          </Button>
          <DarkModeSwitch checked={theme} onChange={changeTheme} />
          <ClickAwayListener onClickAway={handleClickAway}>
            <Tooltip title="Open Settings">
              <IconButton
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                  handleAvatarClick(e)
                }
              >
                <Avatar
                  src="https://source.unsplash.com/random/1080×1920/?random-person"
                  sx={{ width: 35, height: 35 }}
                />
              </IconButton>
            </Tooltip>
          </ClickAwayListener>
          <Menu open={open} anchorEl={anchor}>
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
