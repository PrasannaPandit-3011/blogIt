import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Link,
  Typography,
  Zoom,
} from "@mui/material";
import { useAtomValue } from "jotai";
import Menu from "./Menu";
import {
  BlogContentStyle,
  BlogTitleStyle,
  CardContentStyle,
  CardMediaStyle,
  CardsContainerStyle,
  CardTopSectionStyle,
  MainContainerStyle,
  TypographyStyle,
} from "../styles";
import { genre, URL } from "../../../utils";
import { themeAtom, filteredBlogsAtom } from "../../../atoms";
import Navigate from "../../Common/Components/Navigate";

const BlogCards: React.FC = () => {
  const theme = useAtomValue(themeAtom);
  const filteredBlogs = useAtomValue(filteredBlogsAtom);
  const { handleNavigate } = Navigate();

  const renderContent = (content: string) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = content;
    let plainTextContent = tempElement.textContent || "";
    plainTextContent =
      plainTextContent.length > 550
        ? `${plainTextContent.substring(0, 550)}...`
        : plainTextContent;
    return plainTextContent.trim();
  };

  return (
    <Box sx={CardsContainerStyle}>
      {filteredBlogs?.map((blog, index) => (
        <Zoom key={blog.id} in={true}>
          <Card elevation={1} sx={MainContainerStyle(theme)}>
            <CardContent sx={CardContentStyle}>
              <Box sx={CardTopSectionStyle}>
                <Chip
                  color={
                    genre[blog?.type] === undefined
                      ? "default"
                      : genre[blog?.type]
                  }
                  size="small"
                  label={
                    blog.type === "Current_Event" ? "Current Event" : blog.type
                  }
                />
                <Typography
                  variant="caption"
                  fontWeight="bold"
                  color={TypographyStyle(theme)}
                >
                  {`${new Date(blog.createdAt).toDateString().split(" ")[2]} ${
                    new Date(blog.createdAt).toDateString().split(" ")[1]
                  } ${new Date(blog.createdAt).toDateString().split(" ")[3]}`}
                </Typography>
              </Box>
              <Link
                variant="body1"
                fontWeight="bold"
                color={TypographyStyle(theme)}
                sx={BlogTitleStyle}
                onClick={() => handleNavigate(`/blogs/${blog.id}`)}
              >
                {blog?.title}
              </Link>
              <Typography
                variant="body1"
                color="grey"
                sx={{ mt: 1, mx: 1, display: "flex", flexWrap: "wrap" }}
                dangerouslySetInnerHTML={{
                  __html: renderContent(blog.content),
                }}
              />
              <Typography variant="body2" sx={BlogContentStyle}>
                {blog.author.name}
              </Typography>
              <Menu {...blog} />
            </CardContent>
            <CardMedia
              component="img"
              image={URL(index + 1)}
              alt="Blog Cover"
              sx={CardMediaStyle(theme)}
            />
          </Card>
        </Zoom>
      ))}
    </Box>
  );
};

export default BlogCards;
