import { useState } from "react";
import { Formik, Field, Form, useFormik } from "formik";
import * as yup from "yup";
import {
  Container,
  TextField,
  Button,
  Paper,
  Stack,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import { loremIpsum } from "react-lorem-ipsum";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(1, "Please enter a name longer than one character")
    .max(20, "Please enter a shorter name")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "please enter a last name longer than two characters")
    .max(20, "Please enter a shorter name")
    .required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const RegisterPage = () => {
  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
    },
    onSubmit: () => {},
    validationSchema,
  });

  return (
    <Container sx={{ pt: "48px" }}>
      <Grid
        direction="row"
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={6}>
          <Card>
            <CardHeader title={loremIpsum({ avgSentencesPerParagraph: 1 })} />
            <CardContent>
              <Typography>{loremIpsum({ p: 4 })}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Paper sx={{ padding: "25px" }}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
                <TextField
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <TextField
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  error={
                    touched.confirmPassword && Boolean(errors.confirmPassword)
                  }
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Register
                </Button>
                <Link href="/login">Already have an account?</Link>
              </Stack>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegisterPage;
