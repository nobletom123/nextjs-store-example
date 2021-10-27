import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
  Divider,
} from "@mui/material";

const AddCard = ({ open }) => {
  return (
    <Dialog open={open}>
      <DialogTitle>Add Card</DialogTitle>
      <DialogContent>
        <DialogContentText>Add a card</DialogContentText>
        <Typography variant="body2">
          Use 4242 4242 4242 4242 for failure, everything else will pass
        </Typography>
        <Divider />
        <TextField></TextField>
        <TextField></TextField>
        <TextField></TextField>
      </DialogContent>
    </Dialog>
  );
};
