import {
  Container,
  Heading,
  VStack,
  Text,
  Input,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <Heading py={'2'}>Welcome Back!</Heading>
        <Text py={'2'}>Please provide your credentials: </Text>
        <VStack w={'fit-content'} m={'auto'} my={'16'}>
          <Heading
            borderBottom={'2px solid'}
            textTransform={'uppercase'}
            my={'4'}
          >
            Enter Details
          </Heading>
          <Input required placeholder="Enter UserID" type="text" />
          <Input required placeholder="Enter email-id" type="email" />
          <Input required placeholder="Enter Password" type="password" />
          <Button variant={'outline'} colorScheme={'purple'}>
            Login
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
