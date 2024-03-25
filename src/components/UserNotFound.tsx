import { Box, Heading } from "@chakra-ui/react";

const UserNotFound = () => {
  return (
    <Box textAlign="center" mt={8}>
      <Heading size="lg" mb={4}>404 - User Not Found</Heading>
      <Box>
        The user you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Box>
    </Box>
  );
};

export default UserNotFound;
