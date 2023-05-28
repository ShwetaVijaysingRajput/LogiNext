import React, { useContext, useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { AppContext } from "../../context";
import { Divider, TextField, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 5,
  px: 4,
  py: 4,
  pb: 3,
  overflow: "auto",
};

export default function EditModal() {
  const { eopen, setEOpen, selected, editSaveHandler } = useContext(AppContext);
  const name_ref = useRef(null);
  const mail_ref = useRef(null);
  const phone_ref = useRef(null);
  const website_ref = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    const copy = JSON.parse(JSON.stringify(selected));
    const newModifiedData = {
      ...copy,
      name: name_ref.current.value,
      email: mail_ref.current.value,
      phone: phone_ref.current.value,
      website: website_ref.current.value,
    };
    editSaveHandler(newModifiedData);
  };
  return (
    <Modal
      open={eopen}
      onClose={() => setEOpen(false)}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, width: 600, height: 450 }}>
        <Box mb={3}>
          <Typography fontWeight={"bold"}> Edit user profile</Typography>
        </Box>
        <Divider variant={"middle"} />
        <Box>
          <form onSubmit={submitHandler}>
            <TextField
              required
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              style={{ paddingBottom: "20px" }}
              inputRef={name_ref}
              defaultValue={
                selected !== null &&
                selected.name !== undefined &&
                selected.name !== null
                  ? selected.name
                  : ""
              }
            />
            <TextField
              required
              id="email"
              label="E-mail"
              variant="outlined"
              fullWidth
              mb={2}
              style={{ paddingBottom: "20px" }}
              inputRef={mail_ref}
              type="email"
              defaultValue={
                selected !== null &&
                selected.email !== undefined &&
                selected.email !== null
                  ? selected.email
                  : ""
              }
            />
            <TextField
              required
              id="phone"
              label="Mobile no."
              variant="outlined"
              fullWidth
              mb={2}
              style={{ paddingBottom: "20px" }}
              inputRef={phone_ref}
              type="tel"
              defaultValue={
                selected !== null &&
                selected.phone !== undefined &&
                selected.phone !== null
                  ? selected.phone
                  : ""
              }
            />
            <TextField
              required
              id="website"
              label="Website"
              variant="outlined"
              fullWidth
              mb={2}
              style={{ paddingBottom: "20px" }}
              inputRef={website_ref}
              type="url"
              defaultValue={
                selected !== null &&
                selected.website !== undefined &&
                selected.website !== null
                  ? selected.website
                  : ""
              }
            />
            <Box display={"flex"} justifyContent={"end"}>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => setEOpen(false)}
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Modal>
  );
}
