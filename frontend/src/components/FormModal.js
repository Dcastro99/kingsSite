import React, { useRef } from 'react';
import { Box, Button, Typography, Modal, TextField, Grid, Paper } from '@mui/material';
import emailjs from '@emailjs/browser';
import { ModalStyles } from '../styles/ModalStyles';


export default function BasicModal() {
  const form = useRef(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <Box >
      <Button sx={ModalStyles.mainButton} onClick={handleOpen}>Inquire</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyles.mainBox}>
          <form ref={form} onSubmit={sendEmail}>
            <Paper sx={ModalStyles.paperContainer} elevation={5}>
              <Box sx={ModalStyles.titleContainer}>
                <Typography sx={ModalStyles.title}>
                  Contact Us
                </Typography>
              </Box>

              <Grid sx={ModalStyles.gridContainer}>
                <Grid item xs={12} sm={6} sx={ModalStyles.gridBox}>
                  <Typography variant="h6" gutterBottom >
                    Please fill out form
                  </Typography>
                  <TextField required id="name" name="user_name" label="Full Name" sx={{ padding: '10px' }} />
                  <TextField required id="email" name="user_email" label="Email" sx={{ padding: '10px' }} />
                  <TextField multiline required id="subject" name="subject" label="Subject" sx={{ padding: '10px', width: '80%' }} />
                </Grid>
              </Grid>
              <Button type='submit' sx={ModalStyles.submitButtin}  >Send</Button>
            </Paper>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}

