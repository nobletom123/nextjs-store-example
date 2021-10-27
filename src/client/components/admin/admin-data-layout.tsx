import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography,
  DialogActions,
} from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FunctionComponent, ReactNode, useState } from "react";

type AdminDataLayoutProperties = {
  sectionTitle: string;
  columns: GridColDef[];
  rows: Record<string, any>[];
  createDialogTitle?: string;
  createDialogContent: ReactNode;
  createDialogAgreeFunction: () => any;
};

const AdminDataLayout: FunctionComponent<AdminDataLayoutProperties> = ({
  sectionTitle,
  columns,
  rows,
  createDialogTitle,
  createDialogContent,
  createDialogAgreeFunction,
}) => {
  const [createDialogIsOpen, setCreateDialogIsOpen] = useState<boolean>(false);
  console.log("rows", rows);

  return (
    <Stack spacing={3} divider={<Divider />}>
      <Dialog
        open={createDialogIsOpen}
        onClose={() => setCreateDialogIsOpen(false)}
      >
        <DialogTitle>{createDialogTitle || "Create"}</DialogTitle>
        <DialogContent>{createDialogContent}</DialogContent>
        <DialogActions>
          <Button onClick={() => setCreateDialogIsOpen(false)}>Cancel</Button>
          <Button onClick={() => createDialogAgreeFunction()}>Create</Button>
        </DialogActions>
      </Dialog>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>{sectionTitle}</Typography>
        <Box>
          <Button
            color="success"
            variant="contained"
            onClick={() => setCreateDialogIsOpen(true)}
          >
            Create
          </Button>
        </Box>
      </Stack>
      <Box sx={{ height: "500px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </Stack>
  );
};

export { AdminDataLayout };
