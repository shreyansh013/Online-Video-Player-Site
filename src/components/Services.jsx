import React from 'react';
import { Container, Heading, Stack, Image, Text } from '@chakra-ui/react';
import img5 from '../assets/5.png';

const Services = () => {
  return (
    <>
      <Container minH={'100vh'} maxW={'container.xl'}>
        <Heading
          py={'4'}
          borderBottom={'2px solid'}
          w={'fit-content'}
          m={'auto'}
          textTransform={'uppercase'}
        >
          Services
        </Heading>

        {/* Services Stack from here */}
        <Stack
          p={'4'}
          h={'full'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            src={img5}
            h={['40', '250', '400']}
            filter={'hue-rotate(-150deg)'}
          />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            textAlign={'center'}
            p={['4', '8', '16']}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            molestiae omnis quod vel dolorum minima accusamus corporis quas
            suscipit sit et quis unde, officia, nesciunt excepturi. Hic autem et
            laborum quaerat debitis dolore dicta, magnam similique atque
            excepturi a possimus modi harum dolores repellendus impedit eos
            aperiam dolor beatae exercitationem? Alias animi fugiat commodi
            dignissimos, sequi tempora esse veniam magnam amet inventore culpa
            voluptate debitis hic atque possimus porro incidunt dolore adipisci
            minima impedit exercitationem, reprehenderit excepturi! Quos modi
            voluptatem nesciunt nostrum eveniet dolore perferendis nam fugit
            aliquid tempora, sit consectetur quaerat deserunt illum laborum
            incidunt suscipit, facere dolor asperiores recusandae? Odio nemo
            quas saepe! Voluptate quisquam perspiciatis vitae labore atque nemo
            at autem, impedit consequuntur numquam quos! Amet quae ipsa aliquam
            labore, non quis iure praesentium harum sapiente totam itaque enim
            explicabo at aperiam. Hic sit vitae minima omnis rem nemo voluptas
            eum nihil.
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default Services;
