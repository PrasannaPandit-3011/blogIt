import React from "react";
import { Autocomplete } from "@mui/material";
import { blogsAtom } from "../../../atoms";
import { useAtomValue } from "jotai";
import CustomTextField from "../../Custom/CustomTextFields";
import Navigate from "../../Common/Components/Navigate";
import { SearchBarStyle } from "../styles";

const SearchComponent: React.FC = () => {
  const blogs = useAtomValue(blogsAtom);
  const { handleNavigate } = Navigate();

  const handleOptionSelect = (
    _event: React.SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    if (value) {
      const selectedBlog = blogs.find((blog) => blog.title === value);
      if (selectedBlog) {
        handleNavigate(`/blogs/${selectedBlog.id}`);
      }
    }
  };

  return (
    <Autocomplete
      freeSolo
      fullWidth
      options={blogs?.map((option) => option.title) ?? []}
      onChange={handleOptionSelect}
      renderInput={(params) => (
        <CustomTextField
          {...params}
          label="Search..."
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
      sx={SearchBarStyle}
    />
  );
};

export default SearchComponent;
