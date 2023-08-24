import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Formik, FormikProps } from "formik";

import { SignupSchema } from "./ValidateSchema";

function Basic() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", firstName: "", lastName: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }: FormikProps<any>) => (
          <form onSubmit={handleSubmit}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingBottom: 8,
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" color={"#fff"}>
                  Sign up
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} color={"#fff"}>
                      <TextField
                        sx={{
                          input: { color: "#fff", border: "2px solid aqua" },
                          label: { color: "#fff" },
                        }}
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        color={"primary"}
                      />
                      <>
                        {errors.firstName &&
                          touched.firstName &&
                          errors.firstName}
                      </>
                    </Grid>
                    <Grid item xs={12} sm={6} color={"#fff"}>
                      <TextField
                        sx={{
                          input: { color: "#fff", border: "2px solid aqua" },
                          label: { color: "#fff" },
                        }}
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        color={"primary"}
                      />
                      <>
                        {" "}
                        {errors.lastName && touched.lastName && errors.lastName}
                      </>
                    </Grid>

                    <Grid item xs={20}>
                      <TextField
                        sx={{
                          input: { color: "#fff", border: "2px solid aqua" },
                          placeholder: { color: "#fff" },
                          label: { color: "#fff" },
                        }}
                        variant={"outlined"}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <>{errors.email && touched.email && errors.email}</>
                    </Grid>

                    <Grid item xs={12}>
                      <>
                        <FormControl
                          sx={{
                            maxwidth: "90ch",
                            color: "white",
                            label: { color: "#fff" },
                            border: "2px solid aqua",
                          }}
                          variant="outlined"
                        >
                          <InputLabel
                            htmlFor="outlined-adornment-password"
                            color={"primary"}
                          >
                            Password
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            required
                            fullWidth
                            color={"primary"}
                            name="password"
                            autoComplete="new-password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            size={"medium"}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Password"
                          />
                        </FormControl>
                        {errors.password && touched.password && errors.password}
                      </>
                    </Grid>

                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="allowExtraEmails"
                            color="primary"
                            required
                          />
                        }
                        label="I want to receive inspiration, marketing promotions and updates via email."
                      />
                    </Grid>
                  </Grid>

                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <NavLink to="/login">
                        <Link href="/login" variant="inherit" color={"#000"}>
                          Already have an account? Sign in
                        </Link>
                      </NavLink>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <NavLink
                to={
                  !errors.password ||
                  !errors.email ||
                  !errors.firstName ||
                  !errors.lastName
                    ? "/"
                    : ""
                }
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={
                    !!errors.password ||
                    !!errors.email ||
                    !!errors.firstName ||
                    !!errors.lastName
                  }
                  size={"small"}
                >
                  Sign Up
                </Button>
              </NavLink>
            </Container>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Basic;
