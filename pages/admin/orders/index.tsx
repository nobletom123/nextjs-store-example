import { Divider, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { AdminLayout } from "../../../src/client/components/layout/admin-layout";
import { AdminDataLayout } from "../../../src/client/components/admin/admin-data-layout";
import { useFormik } from "formik";
import * as yup from "yup";
import { productData } from "../../../src/mock-api-data/products";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
  },
];

const validationSchema = yup.object({
  price: yup
    .number()
    .required("Price is required")
    .min(1, "Please enter a price greater than 1")
    .max(200, "Please enter a price lower than 200"),
  name: yup
    .string()
    .required("Product name is required")
    .min(2, "please enter a product name longer than two characters")
    .max(20, "Please enter a shorter name"),
});

const AdminProductsIndex = () => {
  const onCreateSubmit = () => {};

  const { submitForm, values, touched, handleChange, errors } = useFormik({
    initialValues: { name: "", price: 0 },
    onSubmit: onCreateSubmit,
    validationSchema,
  });

  return (
    <AdminLayout>
      <AdminDataLayout
        sectionTitle="Orders"
        columns={columns}
        rows={productData}
        createDialogTitle="Create Product"
        createDialogAgreeFunction={submitForm}
        createDialogContent={
          <Stack spacing={3}>
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
              id="price"
              name="price"
              label="Price"
              value={values.price}
              onChange={handleChange}
              error={touched.price && Boolean(errors.price)}
              helperText={touched.price && errors.price}
            />
          </Stack>
        }
      />
    </AdminLayout>
  );
};

export default AdminProductsIndex;
