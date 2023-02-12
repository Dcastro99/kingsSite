import React from 'react'
import { Box } from '@mui/material';
import { footerStyles } from '../styles/footerStyles';
function Footer() {
  return (
    <Box sx={footerStyles.footerContainer}>
      &copy; Kings All Around LLC
    </Box>
  )
}

export default Footer

