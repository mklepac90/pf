import { Box, Grid } from '@chakra-ui/react';

export default function Layout({ children }) {
  return (
    <Box maxW="640px" margin="auto" py={8}>
      {children}
    </Box>
  );
}
