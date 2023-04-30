import React from 'react';
import {
  Box,
  Stack,
  VStack,
  HStack,
  Heading,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import { BiRightArrow } from 'react-icons/bi';

const Footer = () => {
  return (
    <>
      <Box bgColor={'blackAlpha.900'} minH={'40'} color={'white'} p={'16'}>
        <Stack direction={['column', 'row']}>
          <VStack w={'full'} py={['10px', 'none']}>
            <Heading textTransform={'uppercase'} size={'md'}>
              Vanilla-Dice.inc
            </Heading>
            <HStack borderBottom={['none', '2px solid white']} py={'1'}>
              <Input
                placeholder="Subscribe With email"
                borderRadius={'none'}
                border={'none'}
                focusBorderColor={'none'}
              />
              <Button
                color={'purple'}
                borderRadius={'0 20px 20px 0'}
                p={'0'}
                variant={'ghost'}
              >
                <BiRightArrow size={'20'} />
              </Button>
            </HStack>
          </VStack>
          <VStack
            w={'full'}
            borderRight={['none', '1px solid white']}
            borderLeft={['none', '1px solid white']}
            borderTop={['1px solid white', 'none']}
            borderBottom={['1px solid white', 'none']}
            py={['10px', 'none']}
          >
            <Heading textTransform={'uppercase'} size={'xl'}>
              Video Hub
            </Heading>
            <Text textAlign={'center'}>All rights reserved</Text>
          </VStack>
          <VStack w={'full'} py={['10px', 'none']}>
            <Heading textTransform={'uppercase'} size={'md'}>
              Social Media
            </Heading>
            <Button variant={'link'} color={'white'}>
              <a
                target={'_blank'}
                href="https://www.linkedin.com/in/shreyansh-saxena-b125b8205/"
              >
                LinkedIn
              </a>
            </Button>
            <Button variant={'link'} color={'white'}>
              <a
                target={'_blank'}
                href="https://www.linkedin.com/in/shreyansh-saxena-b125b8205/"
              >
                Github
              </a>
            </Button>
            <Button variant={'link'} color={'white'}>
              <a
                target={'_blank'}
                href="https://www.linkedin.com/in/shreyansh-saxena-b125b8205/"
              >
                Instagram
              </a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
