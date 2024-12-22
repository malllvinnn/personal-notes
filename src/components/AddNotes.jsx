import * as React from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#1E293B",
  borderRadius: "0.5rem",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const styleForm = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#3E5879", // Warna border
    },
    "&:hover fieldset": {
      borderColor: "#D8C4B6", // Warna saat hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#D8C4B6", // Warna saat fokus
    },
  },
  "& .MuiInputLabel-root": {
    color: "#3E5879", // Warna label
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#D8C4B6", // Warna label saat fokus
  },
  "& .MuiInputBase-input": {
    color: "#D8C4B6", // Warna teks yang diketik
  },
};

const styleFormTextArea = {
  ...styleForm,
};

const AddNotes = ({ addNote }) => {
  const [isTitle, setIsTitle] = React.useState("");
  const [isBody, setIsBody] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmitAddHandler = (e) => {
    e.preventDefault();
    const data = {
      title: isTitle,
      body: isBody,
    };
    addNote(data);

    setIsTitle("");
    setIsTitle("");
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        <AddIcon />
        Add note
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Buat Catatan
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            onSubmit={onSubmitAddHandler}
          >
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
              sx={styleForm}
              value={isTitle}
              onChange={(e) => setIsTitle(e.target.value)}
            />
            <TextField
              id="outlined-textarea"
              label="Tuliskan Catatan disini"
              multiline
              fullWidth
              rows={6}
              sx={styleFormTextArea}
              value={isBody}
              onChange={(e) => setIsBody(e.target.value)}
            />
            <Button variant="contained" type="submit">
              Buat
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddNotes;
