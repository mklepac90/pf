import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box maxW="36rem" margin="0 auto" p="1.5rem">
      {children}
    </Box>
  );
}
