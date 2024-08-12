import { Box, TextField, Avatar, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { useForm } from "react-hook-form";
import { darkLogo, logo } from "../../../assets";
import { themeAtom, loadingAtom } from "../../../atoms/";
import { AuthProps, signUpType } from "../../../model/AuthTypes";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  SignUpContainerStyles,
  SwitchAuthPageLinkStyle,
  LoginButtonStyles,
  SignUpLogoStyles,
  TextFieldSpaceStyle,
} from "../styles";
import useSignUp from "../../../hooks/useSignUp";

const SignUp: React.FC<AuthProps> = ({ setSignUp }) => {
  const theme = useAtomValue(themeAtom);
  const loading = useAtomValue(loadingAtom);
  const { onSignUp } = useSignUp();

  const form = useForm<signUpType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      name: "",
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
    <Box sx={SignUpContainerStyles(theme)}>
      <Avatar
        variant="square"
        src={theme ? darkLogo : logo}
        alt=""
        sx={SignUpLogoStyles}
      />
      <form
        onSubmit={handleSubmit(onSignUp)}
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <TextField
          label="First Name"
          placeholder="First name"
          type="text"
          fullWidth
          {...register("firstName", {
            required: "First name is required",
          })}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          sx={TextFieldSpaceStyle}
        />
        <TextField
          label="Last Name"
          placeholder="Last name"
          type="text"
          fullWidth
          {...register("lastName", { required: "Last name is required" })}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          sx={TextFieldSpaceStyle}
        />
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
            pattern:
              /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s])(?!.*password).{8,30}$/i,
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
            <i>Have An Existing Account? Log In </i>{" "}
          </u>{" "}
        </Typography>
        <LoadingButton
          size="small"
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
  );
};

export default SignUp;
