import React from 'react'
import { Box, Typography } from '@mui/material';
import '../styles/title.css'

function Title() {
  return (
    <>
      <Box sx={{
        display: 'flex',
        flerDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        height: '15%',
        // border: '2px solid black',
        marginTop: '5%',
        marginBottom: '1%',
      }}
      >
        <Typography id='mainTitle'>Kings All Around</Typography>

      </Box >
      <hr style={{
        width: '80%', height: '10px', backgroundColor: 'rgb(0, 0, 0, 0.3)', border: 'none',
      }} />
    </>
  )
}

export default Title
