import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useAtomValue } from "jotai";
import React from "react";
import { themeAtom } from "../../../atoms";
import { CreateBlogTypeSelectStyle } from "../styles/CreateBlog.styles";
import { SelectTypeProps } from "../../../model";

const SelectType: React.FC<SelectTypeProps> = ({ type, setType }) => {
  const blogType = ["Tech", "Food", "Social", "Current_Event"];
  const theme = useAtomValue(themeAtom);
  return (
    <FormControl>
      <InputLabel>Select Type</InputLabel>
      <Select
        label="Select Type"
        size="medium"
        value={type}
        onChange={(e) => setType(e.target.value)}
        sx={CreateBlogTypeSelectStyle(theme)}
      >
        {blogType.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectType;
