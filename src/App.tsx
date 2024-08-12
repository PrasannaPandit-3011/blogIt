import "./App.css";
import Main from "./pages/Main";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CreateBlog } from "./pages/CreateBlog";
import { Blog } from "./pages/Blog";
import { Paths } from "./enums/paths.enums";
import { ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import Auth from "./pages/Auth/Auth";
import { EditBlog } from "./pages/EditBlog";
import Theme from "./pages/Custom/Theme";

function App() {
  const { appTheme } = Theme();

  return (
    <ThemeProvider theme={appTheme}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="App">
        <Routes>
          <Route path={Paths.HOME} element={<Main />}>
            <Route path={Paths.HOME} element={<Home />} />
            <Route path={Paths.CREATE_BLOG} element={<CreateBlog />} />
            <Route path={Paths.BLOG_ID} element={<Blog />} />
            <Route path={Paths.EDIT_ID} element={<EditBlog />} />
            <Route
              path={Paths.NOT_FOUND}
              element={<Navigate to={Paths.HOME} replace />}
            />
          </Route>
          <Route path={Paths.AUTH} element={<Auth />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
