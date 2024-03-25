import { Box, Heading } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Box textAlign="center" mt={8}>
      <Heading size="lg" mb={4}>404 - Page Not Found</Heading>
      <Box>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Box>
    </Box>
  );
};

export default NotFound;
