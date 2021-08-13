import { Box } from '@chakra-ui/react';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <Box w="100vw" h="90vh">
      <Nav />
      {children}
    </Box>
  );
}
