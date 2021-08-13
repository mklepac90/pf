import React from 'react';
import Link from 'next/link';
import { FaSun, FaMoon } from 'react-icons/fa';

import { Flex, Icon, Text, useColorMode } from '@chakra-ui/react';

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = '#121212';
  const fontColor = 'white';

  return (
    <Flex
      as="nav"
      flexDir="row"
      w="100%"
      justify="space-evenly"
      bgColor={bgColor}
      color={fontColor}
      fontSize="xl"
      h="10vh"
      alignItems="center"
    >
      <Text fontWeight="bold" pb={2}>
        <Link href="/">
          <a>michael klepac</a>
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
