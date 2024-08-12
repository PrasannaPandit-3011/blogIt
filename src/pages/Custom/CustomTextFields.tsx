import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiAutocomplete-inputRoot": {
    "& .MuiAutocomplete-clearIndicator": {
      display: theme && "none", // Hide the default clear button
    },
  },
  "& .MuiOutlinedInput-root": {
    paddingRight: "0 !important", // Ensure no extra space on the right
  },
}));

export default CustomTextField;
