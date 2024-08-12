import { Box } from "@mui/material";
import React from "react";
import { HomeContainer, TopBarContainer } from "../styles";
import SearchComponent from "./SearchComponent";
import Sort from "./Sort";
import FilterTabs from "./FilterTabs";

const TopBar: React.FC = () => {
  return (
    <Box sx={HomeContainer}>
      <Box sx={TopBarContainer}>
        <SearchComponent />
        <FilterTabs />
        <Sort />
      </Box>
    </Box>
  );
};

export default TopBar;
