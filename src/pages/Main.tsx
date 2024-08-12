import React, { useEffect } from "react";
import { Outlet } from "react-router";
import { Box } from "@mui/material";
import { themeAtom, initialValues, userAtom } from "../atoms";
import { useAtomValue } from "jotai";
import Navbar from "./Common/Components/Navbar";
import Navigate from "./Common/Components/Navigate";
import { Paths } from "../enums/paths.enums";

const Main: React.FC = () => {
  const theme = useAtomValue(themeAtom);
  const user = useAtomValue(userAtom);
  const { handleNavigate } = Navigate();

  useEffect(() => {
    if (user === initialValues && !localStorage.getItem("user")) {
      handleNavigate(Paths.AUTH);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: theme ? "primary.dark" : "primary.main",
        minHeight: "100vh",
        width: 1,
      }}
    >
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Main;
