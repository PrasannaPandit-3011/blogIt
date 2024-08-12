import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useBlogAtom from "../../../hooks/useBlogAtom";
import { useState } from "react";
import { SelectStyle } from "../styles";

const Sort: React.FC = () => {
  const sortValues: string[] = ["Relevance", "Newest", "Oldest"];
  const [sort, setSort] = useState<string>("Relevance");

  const { sortBlogs } = useBlogAtom();

  const handleSortChange = (option: string) => {
    setSort(option);
    sortBlogs(option);
  };

  return (
    <FormControl>
      <InputLabel>Sort By</InputLabel>
      <Select
        label="Sort By"
        size="medium"
        onChange={(e) => handleSortChange(e.target.value as string)}
        value={sort}
        sx={SelectStyle}
      >
        {sortValues.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Sort;
