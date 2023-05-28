import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AppContext } from "../../context";
export default function AlertDialog() {
  const { dopen, setDOpen, deleteConfirmHandler } = useContext(AppContext);

  return (
    <Dialog
      open={dopen}
      onClose={() => setDOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Confirm"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure, do you want to delete user ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setDOpen(false)} autoFocus variant={"contained"}>
          Cancel
        </Button>
        <Button
          variant={"contained"}
          color="warning"
          onClick={deleteConfirmHandler}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
