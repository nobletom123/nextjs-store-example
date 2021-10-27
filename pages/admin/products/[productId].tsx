import { Typography, Stack, TextField, Divider } from "@mui/material";
import { useFormik } from "formik";
import { Box } from "@mui/system";
import { AdminLayout } from "../../../src/client/components/layout/admin-layout";
import { FunctionComponent } from "react";
import * as yup from "yup";
import { ProductType } from "../../../src/types/product";

const validationSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
  rating: yup
    .number()
    .min(1, "Please enter a value of 1 or greater")
    .max(5, "Please enter a value lower than 6"),
});

const AdminProductDetailsPage: FunctionComponent<ProductType> = ({
  title = "",
  price = 0,
  description = "",
  rating = 0,
}) => {
  const { isValid, values, handleChange, touched, errors } = useFormik({
    initialValues: { title, price, description, rating },
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <AdminLayout>
      <Stack spacing={3}>
        <Typography>Edit Product</Typography>
        <Divider />
        <TextField
          id="title"
          name="name"
          label="Name"
          value={values.title}
          onChange={handleChange}
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
        />
        <TextField
          id="description"
          name="description"
          label="Description"
          value={values.description}
          onChange={handleChange}
          error={touched.description && Boolean(errors.description)}
          helperText={touched.description && errors.description}
        />
        <TextField
          id="price"
          name="price"
          label="Price"
          value={values.price}
          onChange={handleChange}
          error={touched.price && Boolean(errors.price)}
          helperText={touched.price && errors.price}
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

export default AdminProductDetailsPage;
