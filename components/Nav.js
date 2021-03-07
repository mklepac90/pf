import React from 'react';
import Link from 'next/link';
import { FaSun, FaMoon } from 'react-icons/fa';

import { Flex, Icon, Text, useColorMode } from '@chakra-ui/react';

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="nav" flexDir="column" pr={8} pl={[2, 0]}>
      <Text fontWeight="bold" pb={2}>
        <Link href="/">
          <a>yesh yendamuri</a>
        </Link>
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
      {colorMode === 'dark' ? (
        <Icon my={2} onClick={toggleColorMode} as={FaSun} />
      ) : (
        <Icon my={1} onClick={toggleColorMode} as={FaMoon} />
      )}
    </Flex>
  );
};

export default Nav;
