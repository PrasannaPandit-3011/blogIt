import { Box, Button, TextField, Typography } from "@mui/material";
import {
  CreateBlogMainContainerStyle,
  CreateBlogSecondaryContainerStyle,
  CreateBlogSubmitButtonStyle,
} from "../CreateBlog/styles";
import { FontStyle } from "../Blog/styles";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../atoms";
import { useEffect, useRef } from "react";
import useSingleBlog from "../../hooks/useSingleBlog";
import { useParams } from "react-router";
import JoditEditor from "jodit-react";
import Loader from "../Common/Components/Loader";
import EditSelectType from "./Components/EditSelectType";

const EditBlog = () => {
  const theme = useAtomValue(themeAtom);
  const { id } = useParams<string>();
  const { blog, getSingleBlog, updateBlog, loading, setBlog } = useSingleBlog();
  const editor = useRef(null);

  useEffect(() => {
    id && getSingleBlog(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return loading ? (
    <Loader />
  ) : (
    <Box sx={CreateBlogMainContainerStyle(theme)}>
      <Typography variant="h3" color={FontStyle(theme)}>
        Post A Blog
      </Typography>
      <Box sx={CreateBlogSecondaryContainerStyle}>
        <TextField
          label="Title"
          placeholder="Give your blog a title...."
          type="text"
          fullWidth
          value={blog.title}
          sx={{ my: 2 }}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        />
        <EditSelectType blogContent={blog} setBlogContent={setBlog} />
        <JoditEditor
          ref={editor}
          value={blog.content ?? ""}
          onBlur={(newContent) => setBlog({ ...blog, content: newContent })}
          onChange={(newContent) => setBlog({ ...blog, content: newContent })}
        />
        <Button
          variant="contained"
          sx={CreateBlogSubmitButtonStyle(theme)}
          onClick={() => updateBlog(id ?? "", blog)}
        >
          <Typography variant="body2" fontWeight={"bold"}>
            Submit
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default EditBlog;
