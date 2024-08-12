import { paperBg } from "../../../assets";

export const LogInGridOneStyles = {
  backgroundRepeat: "no-repeat",
  backgroundColor: "primary.dark",
  backgroundPosition: "center",
  placeContent: "center",
  backgroundImage: `url(${paperBg})`,
};

export const GridAvatarStyles = {
  width: 0.6,
  height: 0.6,
  mx: "auto",
};

export const FormBoxStyles = {
  ml: 25,
};

export const LogInLogoStyles = { width: 0.5, height: 1, ml: 5, mt: 5 };

export const LoginButtonStyles = (theme: boolean) => {
  return {
    color: theme ? "primary.contrastText" : "secondary.contrastText",
    backgroundColor: theme ? "primary.main" : "primary.dark",
    "&:hover": {
      color: theme ? "secondary.contrastText" : "primary.contrastText",
      backgroundColor: theme ? "primary.dark" : "secondary.contrastText",
    },
    width: 1,
  };
};

export const SwitchAuthPageLinkStyle = (theme: boolean) => {
  return {
    color: theme ? "white" : "black",

    "&:hover": {
      fontWeight: 700,
      color: theme ? "white" : "black",
      cursor: "pointer",
    },
    mb: 2,
  };
};

export const TextFieldSpaceStyle = { mb: 2 };
