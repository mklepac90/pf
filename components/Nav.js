import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <Flex as="nav" flexDir="column" pr={8}>
      <Text fontWeight="bold" pb={2}>
        yesh yendamuri
      </Text>
      <Link href="/">
        <a>writing</a>
      </Link>
      <Link href="/newsletter">
        <a>newsletter</a>
      </Link>
      <Link href="/reading">
        <a>reading</a>
      </Link>
    </Flex>
  );
};

export default Nav;
