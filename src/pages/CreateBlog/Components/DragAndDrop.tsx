import { Box, Typography } from "@mui/material";
import { FontStyle } from "../../Blog/styles/BlogHeader.styles";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../../atoms";
import { SystemUpdateAltRounded } from "@mui/icons-material";
import useImageUpload from "../../../hooks/useImageUpload";
import {
  DragAndDropContainerStyle,
  DragAndDropDropIconStyle,
  DragAndDropDropTextStyle,
  DragAndDropMainStyle,
  DragAndDropTitleStyle,
} from "../styles/DragAndDrop.styles";
import VisuallyHiddenInput from "../../Custom/VisuallyHiddenInput";

const DragAndDrop: React.FC = () => {
  const theme = useAtomValue(themeAtom);
  const {
    fileName,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    handleImageUpload,
  } = useImageUpload();

  return (
    <Box sx={DragAndDropContainerStyle}>
      <Box sx={DragAndDropTitleStyle}>
        <Typography variant={"h5"} fontWeight={"bold"} color={FontStyle(theme)}>
          Upload Blog Cover Image
        </Typography>
      </Box>
      <Box
        sx={DragAndDropMainStyle}
        component="label"
        htmlFor="fileInsert"
        onDragEnter={(e) => handleDragEnter(e)}
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragLeave(e)}
        onDragExit={(e) => handleDragLeave(e)}
      >
        <SystemUpdateAltRounded sx={DragAndDropDropIconStyle(theme)} />
        <Typography color={FontStyle(theme)} sx={DragAndDropDropTextStyle}>
          <strong>Choose</strong> a File or <strong>Drop</strong> it here.
        </Typography>
        <VisuallyHiddenInput
          id="fileInsert"
          type="file"
          onChange={(e) => {
            e.target.files && handleImageUpload(e.target.files[0]);
          }}
        />
      </Box>
      <Typography
        color={FontStyle(theme)}
        fontWeight={"bold"}
        sx={DragAndDropDropTextStyle}
      >
        {fileName}
      </Typography>
    </Box>
  );
};

export default DragAndDrop;
