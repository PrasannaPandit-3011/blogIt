import { Box } from "@mui/material";
import { useEffect } from "react";
import useBlogAtom from "../../hooks/useBlogAtom";
import { useAtomValue } from "jotai";
import { blogsAtom, loadingAtom } from "../../atoms";
import Loader from "../Common/Components/Loader";
import { HomeContainer } from "./styles/Home.styles";
import TopBar from "./Components/TopBar";
import BlogCards from "./Components/BlogCards";

const Home: React.FC = () => {
  const blogs = useAtomValue(blogsAtom);
  const loading = useAtomValue(loadingAtom);
  const { fetchData } = useBlogAtom();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Box sx={HomeContainer}>
      {blogs && (
        <>
          <TopBar />
          <BlogCards />
        </>
      )}
    </Box>
  );
};

export default Home;
