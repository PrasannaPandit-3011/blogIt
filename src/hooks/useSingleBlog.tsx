import axios from "axios";
import { useState } from "react";
import { Blog } from "../model";
import Navigate from "../pages/Common/Components/Navigate";

const useSingleBlog = () => {
  const [blog, setBlog] = useState<Partial<Blog>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const { handleNavigate } = Navigate();

  const getSingleBlog = async (id: string) => {
    setLoading(true);
    const data = await axios.get(`/api/blog/${id}`);
    setBlog(data.data.blog);
    setLoading(false);
  };

  const handleLike = () => {
    setBlog((prev) => {
      if (prev.likes !== undefined) {
        return {
          ...prev,
          likes: prev.likes + 1,
        };
      }
      return prev;
    });
  };

  const handleUnlike = () => {
    setBlog((prev) => {
      if (prev.likes !== undefined) {
        return {
          ...prev,
          likes: prev.likes - 1,
        };
      }
      return prev;
    });
  };

  const updateBlog = async (id: string, body: Blog) => {
    // setLoading(true);
    await axios.patch(`/api/blog/${id}`, {
      body,
    });
    // setLoading(false);
    // handleNavigate(`/api/blog/${id}`);
  };

  return {
    getSingleBlog,
    blog,
    loading,
    handleLike,
    handleUnlike,
    updateBlog,
    setBlog,
  };
};

export default useSingleBlog;
