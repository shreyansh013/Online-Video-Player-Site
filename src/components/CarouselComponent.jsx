import { Box, Image, Heading } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
};

const CarouselComponent = props => {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        interval={1700}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box w={'full'} h={'100vh'}>
          <Image src={props.i1} />
          <Heading
            bgColor={'blackAlpha.700'}
            color={'white'}
            {...headingOptions}
          >
            Watch The Future
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={props.i2} />
          <Heading
            bgColor={'whiteAlpha.700'}
            color={'black'}
            {...headingOptions}
          >
            Future is Gaming
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={props.i3} />
          <Heading
            bgColor={'blackAlpha.500'}
            color={'white'}
            {...headingOptions}
          >
            Console Gaming
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={props.i4} />
          <Heading
            bgColor={'blackAlpha.500'}
            color={'white'}
            {...headingOptions}
          >
            New Games Every Day
          </Heading>
        </Box>
      </Carousel>
    </>
  );
};

export default CarouselComponent;
