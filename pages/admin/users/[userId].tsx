import { Typography, Stack, TextField, Divider } from "@mui/material";
import { useFormik } from "formik";
import { Box } from "@mui/system";
import { AdminLayout } from "../../../src/client/components/layout/admin-layout";
import { FunctionComponent } from "react";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  comment: yup.string().required(),
  rating: yup
    .number()
    .min(1, "Please enter a value greater than 1")
    .max(5, "Please enter a value lower than 5"),
});

const AdminUserDetailsPage: FunctionComponent<{
  name: string;
  email: string;
  comment: string;
  rating: string;
}> = ({ name = "", email = "", comment = "", rating = 0 }) => {
  const { isValid, values, handleChange, touched, errors } = useFormik({
    initialValues: { name, email, comment, rating },
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <AdminLayout>
      <Stack spacing={3}>
        <Typography>Edit Product</Typography>
        <Divider />
        <TextField
          id="name"
          name="name"
          label="Name"
          value={values.name}
          onChange={handleChange}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          id="comment"
          name="comment"
          label="Comment"
          value={values.comment}
          onChange={handleChange}
          error={touched.comment && Boolean(errors.comment)}
          helperText={touched.comment && errors.comment}
        />
        <TextField
          id="rating"
          name="rating"
          label="Rating"
          value={values.rating}
          onChange={handleChange}
          error={touched.rating && Boolean(errors.rating)}
          helperText={touched.rating && errors.rating}
        />
      </Stack>
    </AdminLayout>
  );
};

export default AdminUserDetailsPage;
