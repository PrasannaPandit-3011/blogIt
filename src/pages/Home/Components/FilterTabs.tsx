import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import useBlogAtom from "../../../hooks/useBlogAtom";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../../atoms";
import { TabContainerStyles, TabStyles } from "../styles/FilterTabs.styles";

const FilterTabs: React.FC = () => {
  const [value, setValue] = useState(0);
  const { filterBlogs } = useBlogAtom();
  const theme = useAtomValue(themeAtom);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const tabLabels = ["All", "Tech", "Food", "Social", "Current_Event"];
    filterBlogs(tabLabels[newValue]);
  };

  return (
    <Box sx={TabContainerStyles}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={TabStyles(theme)}
      >
        <Tab label="All" />
        <Tab label="Tech" />
        <Tab label="Food" />
        <Tab label="Social" />
        <Tab label="Current_Event" />
      </Tabs>
    </Box>
  );
};

export default FilterTabs;
