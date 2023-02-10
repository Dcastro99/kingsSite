import React, { useState } from 'react'
import { Box } from '@mui/material';
import { carouselStyles } from '../styles/carouselStyles';
import { images } from '../Helpers/carouselData'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Carousel() {

  const [currImg, setCurrImg] = useState(2)

  return (
    <Box sx={carouselStyles.container}>
      <Box sx={{
        backgroundImage: `url(${images[currImg].img})`,
        height: '100%',
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '30%',
        display: 'flex'
      }}>
        <Box sx={carouselStyles.leftCLick}
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1)
          }}
        ><ArrowBackIosIcon sx={carouselStyles.arrows} /></Box>
        <Box sx={carouselStyles.centerTitle}>

        </Box>
        <Box sx={carouselStyles.rightClick}
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1)
          }}
        >
          <ArrowForwardIosIcon sx={carouselStyles.arrows} />
        </Box>
      </Box>
      <Box sx={carouselStyles.imgTitle} >
        <h1>{images[currImg].title}</h1>
        <p>{images[currImg].subtitle}</p>
      </Box>

    </Box >
  )
}

export default Carousel
