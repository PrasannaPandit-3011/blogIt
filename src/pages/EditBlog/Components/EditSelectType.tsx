import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { TypeProps } from "../../../model";
import { CreateBlogTypeSelectStyle } from "../../CreateBlog/styles";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../../atoms";

const EditSelectType: React.FC<TypeProps> = ({
  blogContent,
  setBlogContent,
}) => {
  const theme = useAtomValue(themeAtom);
  const blogType = ["Tech", "Food", "Social", "Current_Event"];

  return (
    <FormControl>
      <InputLabel>Select Type</InputLabel>
      <Select
        label="Select Type"
        size="medium"
        value={blogContent.type}
        onChange={(e) =>
          setBlogContent({ ...blogContent, type: e.target.value })
        }
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

export default EditSelectType;
