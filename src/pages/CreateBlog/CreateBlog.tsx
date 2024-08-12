import { useAtomValue } from "jotai";
import { themeAtom, userAtom } from "../../atoms";
import { TextField, Box, Button, Typography, Zoom } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import DragAndDrop from "./Components/DragAndDrop";
import SelectType from "./Components/SelectType";
import { PostBlogType } from "../../model/CreateTypes";
import { FontStyle } from "../Blog/styles";
import useBlogAtom from "../../hooks/useBlogAtom";
import {
  CreateBlogMainContainerStyle,
  CreateBlogSecondaryContainerStyle,
  CreateBlogSubmitButtonStyle,
  CreateTextFieldStyle,
} from "./styles/CreateBlog.styles";
import axios from "axios";

const CreateBlog = () => {
  const theme = useAtomValue(themeAtom);
  const user = useAtomValue(userAtom);
  const editor = useRef(null);
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const { createNewBlog } = useBlogAtom();

  const fetchUser = async () => {
    const response = await axios.get("/api/users");
    console.log(response.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const submitData: PostBlogType = {
    title: title,
    content: content,
    author: user,
    type: type,
  };

  return (
    <Box sx={CreateBlogMainContainerStyle(theme)}>
      <Zoom in={true}>
        <Typography variant="h3" color={FontStyle(theme)}>
          Post A Blog
        </Typography>
      </Zoom>
      <Zoom in={true}>
        <Box sx={CreateBlogSecondaryContainerStyle}>
          <TextField
            label="Title"
            placeholder="Give your blog a title...."
            type="text"
            fullWidth
            value={title}
            sx={CreateTextFieldStyle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <SelectType type={type} setType={setType} />
          <DragAndDrop />
          <JoditEditor
            ref={editor}
            value={content}
            onBlur={(newContent) => setContent(newContent)}
          />
          <Button
            variant="contained"
            sx={CreateBlogSubmitButtonStyle(theme)}
            onClick={() => createNewBlog(submitData)}
          >
            <Typography variant="body2" fontWeight={"bold"}>
              Submit
            </Typography>
          </Button>
        </Box>
      </Zoom>
    </Box>
  );
};

export default CreateBlog;
