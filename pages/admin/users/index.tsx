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
    field: "email",
    headerName: "Email",
    width: 150,
  },
];

const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Please provide an email")
    .min(2, "please enter a name longer than two characters")
    .max(20, "Please enter a shorter name"),
  name: yup
    .string()
    .required("Name is required")
    .min(2, "please enter a name longer than two characters")
    .max(20, "Please enter a shorter name"),
});

const AdminProductsIndex = () => {
  const onCreateSubmit = () => {};

  const { submitForm, values, touched, handleChange, errors } = useFormik({
    initialValues: { name: "", email: "" },
    onSubmit: onCreateSubmit,
    validationSchema,
  });

  return (
    <AdminLayout>
      <AdminDataLayout
        sectionTitle="Users"
        columns={columns}
        rows={productData}
        createDialogTitle="Create User"
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
              id="email"
              name="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </Stack>
        }
      />
    </AdminLayout>
  );
};

export default AdminProductsIndex;
