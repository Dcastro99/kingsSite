import React, { useRef } from 'react';
import { Box, Button, Typography, Modal, TextField, Grid, Paper } from '@mui/material';
import emailjs from '@emailjs/browser';



export default function BasicModal() {
  const form = useRef(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const sendEmail = (e) => {
    console.log('SEND EMAIL', e)
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
      <Button sx={{
        color: 'black', borderRadius: 2,
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px', backgroundColor: 'rgba(315, 255, 255, 0.8)',
        marginTop: 15,
        '&:hover': {
          backgroundColor: 'rgb(0,0,0,0.7)',
          color: 'white'
        },
      }} onClick={handleOpen}>Inquire</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          // height: 500,
          bgcolor: 'rgb(0,0,0,0.2)',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          borderRadius: '10px',

        }}>
          <form ref={form} onSubmit={sendEmail}>
            <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }} elevation={5}>
              <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '40px', fontFamily: 'Dancing Script' }}>
                  Contact Us
                </Typography>


              </Box>

              {/* <Typography sx={{ marginLeft: '600px', border: 'solid 2px', padding: '10px', borderRadius: '7px', borderColor: 'lightgray' }} >
              Total: $
            </Typography> */}



              <Grid sx={{ marginTop: '50px', width: '100%' }}>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                  <Typography variant="h6" gutterBottom >
                    Please fill out form
                  </Typography>
                  <TextField required id="name" name="user_name" label="Full Name" sx={{ padding: '10px' }} />
                  <TextField required id="email" name="user_email" label="Email" sx={{ padding: '10px' }} />

                  <TextField multiline required id="subject" name="subject" label="Subject" sx={{ padding: '10px', width: '80%' }} />
                </Grid>


              </Grid>

              <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} spacing={5}>
                <Grid item>

                  <Button type='submit' sx={{
                    marginBottom: 2, color: 'white', marginTop: '20px', boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px', backgroundColor: 'rgb(180,0,0,0.4)', '&:hover': {
                      backgroundColor: 'rgb(200,300,300,0.7)',
                      color: 'black',
                    }
                  }}  >Send</Button>

                </Grid>



              </Grid>
            </Paper>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}

