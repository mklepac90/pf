import { Box } from '@chakra-ui/react';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <Box w="100%" h="100%">
      <Nav />
      {children}
    </Box>
  );
}
