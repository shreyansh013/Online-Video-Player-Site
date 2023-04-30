import { Box } from '@chakra-ui/react';
import React from 'react';
import CarouselComponent from './CarouselComponent';
//import images
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

const Home = () => {
  return (
    <Box>
      <CarouselComponent i1={img1} i2={img2} i3={img3} i4={img4} />
    </Box>
  );
};

export default Home;
