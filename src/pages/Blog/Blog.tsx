import { useEffect } from "react";
import useSingleBlog from "../../hooks/useSingleBlog";
import { useParams } from "react-router";
import { Box } from "@mui/material";
import BlogContent from "./Components/BlogContent";
import BlogHeader from "./Components/BlogHeader";
import BlogComments from "./Components/BlogComments";
import Loader from "../Common/Components/Loader";
import { BlogMainContainer } from "./styles";

const Blog = () => {
  const { id } = useParams<string>();
  const { blog, getSingleBlog, loading, handleLike, handleUnlike } =
    useSingleBlog();

  useEffect(() => {
    getSingleBlog(id ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return loading ? (
    <Loader />
  ) : (
    <Box sx={BlogMainContainer}>
      <BlogHeader
        blog={blog}
        handleLike={handleLike}
        handleUnlike={handleUnlike}
      />
      <BlogContent content={blog?.content ?? ""} />

      <BlogComments blog={blog} />
    </Box>
  );
};

export default Blog;
