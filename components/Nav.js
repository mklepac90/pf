import React from 'react';
import Link from 'next/link';
import { FaSun, FaMoon } from 'react-icons/fa';

import { Flex, IconButton, Text, useColorMode } from '@chakra-ui/react';

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
        <a>blog</a>
      </Link>
      <Link href="/reading">
        <a>bookshelf</a>
      </Link>
      <Link href="/newsletter">
        <a>about</a>
      </Link>
      {colorMode === 'dark' ? (
        <IconButton
          variant="ghost"
          onClick={toggleColorMode}
          icon={<FaSun />}
          aria-label="Switch to bright mode"
          size="lg"
          _hover={{ bgColor: null, color: 'orange' }}
        />
      ) : (
        <IconButton
          variant="ghost"
          onClick={toggleColorMode}
          icon={<FaMoon />}
          aria-label="Switch to dark mode"
          size="lg"
          _hover={{ bgColor: null, color: 'purple' }}
        />
      )}
    </Flex>
  );
};

export default Nav;
