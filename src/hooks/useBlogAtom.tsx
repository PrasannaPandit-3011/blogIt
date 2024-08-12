import { useAtom, useSetAtom } from "jotai";
import { blogsAtom, filteredBlogsAtom, loadingAtom } from "../atoms";
import axios from "axios";
import { Data, PostBlogType } from "../model";
import toast from "react-hot-toast";
import Navigate from "../pages/Common/Components/Navigate";

const useBlogAtom = () => {
  const [blogs, setBlogs] = useAtom(blogsAtom);
  const [filteredBlogs, setFilteredBlogs] = useAtom(filteredBlogsAtom);
  const setLoading = useSetAtom(loadingAtom);
  const { handleNavigate } = Navigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get<Data["data"]>("/api/blog");
      setBlogs(data.blogs);
      setFilteredBlogs(data.blogs); // Set filteredBlogs initially
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id: string) => {
    try {
      setLoading(true);
      await axios.delete(`/api/blog/${id}`);
      await fetchData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const createNewBlog = async (blog: PostBlogType) => {
    try {
      setLoading(true);
      if (
        blog.title.trim() === "" ||
        blog.content.trim() === "<p><br></p>" ||
        blog.type === ""
      ) {
        toast.error("Fields cannot be empty");
        return;
      }

      const { data } = await axios.post("/api/blog", blog);
      setBlogs([data.blog, ...blogs]);
      setFilteredBlogs([data.blog, ...blogs]); // Update filteredBlogs
      toast.success(data.message);
      handleNavigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const sortBlogs = (option: string) => {
    const sortedBlogs = [...filteredBlogs];
    if (option === "Newest") {
      sortedBlogs.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else if (option === "Oldest") {
      sortedBlogs.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    }
    setFilteredBlogs(sortedBlogs);
  };

  const filterBlogs = (type: string) => {
    if (type === "All") {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter((blog) => blog.type === type);
      setFilteredBlogs(filtered);
    }
  };

  return {
    fetchData,
    deleteBlog,
    filteredBlogs,
    createNewBlog,
    sortBlogs,
    filterBlogs,
  };
};

export default useBlogAtom;
