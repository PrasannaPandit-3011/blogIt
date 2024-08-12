import { Avatar, Box } from "@mui/material";
import { BlogContentProp } from "../../../model";
import { MainContentAvatarStyle } from "../styles/BlogContent.styles";
import { FontStyle } from "../styles/BlogHeader.styles";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../../atoms";

const BlogContent: React.FC<BlogContentProp> = ({ content }) => {
  const theme = useAtomValue(themeAtom);

  return (
    <Box
      sx={{
        width: 0.8,
      }}
    >
      <Avatar
        variant="square"
        src="https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_10.jpg"
        sx={MainContentAvatarStyle}
      />
      <Box
        component="div"
        color={FontStyle(theme)}
        sx={{ textAlign: "justify", fontFamily: "ubuntu" }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  );
};

export default BlogContent;
