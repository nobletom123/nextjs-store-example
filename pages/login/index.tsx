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
import { string } from "yup/lib/locale";
import { motion } from "framer-motion";

const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should be of minimum 8 characters length"),
});

const LoginPage = () => {
  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
    },
    onSubmit: () => {},
    validationSchema: validationSchema,
  });

  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        duration: (i + 1) * 0.3,
      },
      y: 0,
    }),
    hidden: { opacity: 0, y: "25%" },
  };

  return (
    <Container sx={{ pt: "48px" }}>
      <Grid
        direction="row"
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={6}>
          <motion.div
            variants={variants}
            custom={1}
            initial="hidden"
            animate="visible"
            style={{ height: "inherit" }}
          >
            <Card>
              <CardHeader title={loremIpsum({ avgSentencesPerParagraph: 1 })} />
              <CardContent>
                <Typography>{loremIpsum({ p: 4 })}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={5}>
          <motion.div
            variants={variants}
            custom={0}
            initial="hidden"
            animate="visible"
            style={{ height: "inherit" }}
          >
            <Paper sx={{ padding: "25px" }}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
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

                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                  >
                    Login
                  </Button>
                  <Link href="/register">Don't have an account?</Link>
                </Stack>
              </form>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
