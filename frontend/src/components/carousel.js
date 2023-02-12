import React, { useState } from 'react'
import { Box, Card, Typography } from '@mui/material';
import { carouselStyles } from '../styles/carouselStyles';
import { images } from '../Helpers/carouselData'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Carousel() {

  const [currImg, setCurrImg] = useState(2)

  return (
    <>
      <Box sx={carouselStyles.container}>
        <Card sx={{
          backgroundImage: `url(${images[currImg].img})`,
          height: '100%',
          width: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          backgroundColor: 'rgba(1,1,1,0.8)',
          borderRadius: '10px',
          display: 'flex',
          boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
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
        </Card>


      </Box >
      <Box sx={carouselStyles.imgTitleContainer} >
        <Typography sx={carouselStyles.imgTitle}>{images[currImg].title}</Typography>
        <Typography>{images[currImg].subtitle}</Typography>
      </Box>
    </>
  )
}

export default Carousel
