import {
  Container,
  Heading,
  VStack,
  Text,
  Input,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <Heading py={'2'}>Welcome to the Site!</Heading>
        <Text py={'2'}>Please provide your credentials: </Text>
        <VStack w={'fit-content'} m={'auto'} my={'16'}>
          <Heading
            borderBottom={'2px solid'}
            textTransform={'uppercase'}
            my={'4'}
          >
            Enter Details
          </Heading>
          <Input required placeholder="Enter New UserID" type="text" />
          <Input required placeholder="Enter your email-id" type="email" />
          <Input required placeholder="Enter New Password" type="password" />
          <Button variant={'outline'} colorScheme={'purple'}>
            Register
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
