import React from 'react'
import { Box, Typography } from '@mui/material';
import { styles } from '../styles/TitleStyles'
import '../styles/title.css'

function Title() {
  return (
    <>
      <Box sx={styles.title}>

        <Typography id='mainTitle' >Kings All Around</Typography>
        {/* <Typography >General Contractor</Typography> */}

      </Box >
      <hr style={styles.hrStyle} />
    </>
  )
}

export default Title
