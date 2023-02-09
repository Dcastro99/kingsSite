// import react from 'react';
import { Box, Typography } from '@mui/material';
import Carousel from './components/carousel';
import { styles } from './styles/appStyles';



function App() {
  return (
    <Box sx={styles.main}>
      {/* <Box sx={styles.carouselContainer} > */}
      <Carousel />
      {/* <Typography>New Site!</Typography> */}
      {/* </Box> */}
    </Box>
  );
}

console.log('HUH??', styles.main)
export default App;
