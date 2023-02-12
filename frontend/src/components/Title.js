import React from 'react'
import { Box, Typography } from '@mui/material';
import { styles } from '../styles/TitleStyles'

function Title() {
  return (
    <>
      <Box sx={styles.titleContainer}>
        <Typography id='mainTitle' sx={styles.title}>Kings All Around</Typography>
        <Typography sx={styles.subTitle}>General Contracting</Typography>
      </Box >
      <hr style={styles.hrStyle} />
    </>
  )
}

export default Title
