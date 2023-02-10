import { Box, Typography } from '@mui/material';
import { width } from '@mui/system';

import React from 'react'
//  // sx={{ width: '40%', height: '55%', backgroundColor: 'purple', marginTop: '10%' }}
function About() {
  return (
    <>
      <hr style={{
        width: '80%', height: '5px', backgroundColor: 'rgb(0, 0, 0, 0.3)', border: 'none', marginTop: '5%'
      }} />
      < Box sx={{ width: '40%', marginTop: 10, border: '5px solid black', padding: 10, borderBlockColor: 'rgb' }} >
        <Typography >

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere erat est, nec consectetur mauris tristique ut. Morbi nulla nulla, tempor a cursus ut, faucibus et elit. Donec interdum, dolor quis efficitur laoreet, lorem ligula blandit lectus, at pulvinar quam lectus sit amet nisi. Quisque auctor, mi at tincidunt consequat, nulla nibh rhoncus odio, sed vehicula sem orci et libero. Donec orci arcu, porttitor a libero eu, lacinia viverra nunc. Integer vitae lacus tellus. Proin sit amet nibh at dui fringilla ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vitae ligula hendrerit, varius est eu, venenatis sapien. Quisque lobortis fringilla velit, ornare rutrum velit dapibus quis. In nisi elit, elementum sit amet sapien et, dignissim facilisis lectus.



        </Typography>
      </Box>
    </>
  )
}

export default About
