import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function PrayerDialog({ open, onClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson);

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Prayer Request</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Submit your prayer request and our ministry team will pray for you.
        </DialogContentText>

        <form id="prayer-form" onSubmit={handleSubmit}>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            fullWidth
            variant="standard"
          />

          <TextField
            margin="dense"
            name="email"
            label="Email"
            fullWidth
            variant="standard"
          />

          <TextField
            margin="dense"
            name="request"
            label="Prayer Request"
            multiline
            rows={4}
            fullWidth
            variant="standard"
          />
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" form="prayer-form">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
