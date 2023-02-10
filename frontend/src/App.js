// import react from 'react';
import { Box } from '@mui/material';
import Carousel from './components/carousel';
import Title from './components/Title';
import About from './components/about';
import Footer from './components/Footer';
import { styles } from './styles/appStyles';



function App() {
  return (
    <>
      <Box sx={styles.main}>
        <Title />
        <Carousel />
        <About />
        <Footer />
      </Box>

    </>
  );
}

console.log('HUH??', styles.main)
export default App;
