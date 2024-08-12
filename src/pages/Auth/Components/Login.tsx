import {
  Avatar,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
} from "@mui/material";
import { useAtomValue } from "jotai";
import { themeAtom, loadingAtom } from "../../../atoms";
import { useForm } from "react-hook-form";
import { AuthProps, logInType } from "../../../model/AuthTypes";
import { darkLogo, logInSvg, logo } from "../../../assets";
import { Box } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  FormBoxStyles,
  GridAvatarStyles,
  LoginButtonStyles,
  LogInGridOneStyles,
  LogInLogoStyles,
  SwitchAuthPageLinkStyle,
  TextFieldSpaceStyle,
} from "../styles";
import useLogIn from "../../../hooks/useLogIn";

const LogIn: React.FC<AuthProps> = ({ setSignUp }) => {
  const theme = useAtomValue(themeAtom);
  const loading = useAtomValue(loadingAtom);
  const { onLogIn } = useLogIn();

  const form = useForm<logInType>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} sx={LogInGridOneStyles}>
        <Avatar src={logInSvg} sx={GridAvatarStyles} />
      </Grid>
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box sx={FormBoxStyles}>
          <Avatar
            variant="square"
            src={theme ? darkLogo : logo}
            alt=""
            sx={LogInLogoStyles}
          />
          <form
            onSubmit={handleSubmit(onLogIn)}
            style={{
              width: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <TextField
              label="Email"
              placeholder="example@example.com"
              type="text"
              fullWidth
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={TextFieldSpaceStyle}
            />

            <TextField
              label="Password"
              type="password"
              {...register("password", {
                required: "Password is required",
                min: 8,
                maxLength: 30,
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={TextFieldSpaceStyle}
            />
            <Typography
              onClick={() => setSignUp((prev: boolean) => !prev)}
              sx={SwitchAuthPageLinkStyle(theme)}
            >
              {" "}
              <u>
                {" "}
                <i> Dont have an account? Create One </i>{" "}
              </u>{" "}
            </Typography>
            <LoadingButton
              size="large"
              loading={loading}
              variant="contained"
              sx={LoginButtonStyles(theme)}
              type="submit"
            >
              {" "}
              <Typography variant="body2" fontWeight="bolder" p={0.3}>
                Submit
              </Typography>
            </LoadingButton>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LogIn;
