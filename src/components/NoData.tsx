import { Box, Heading } from "@chakra-ui/react";

const NoData = () => {
  return (
    <Box textAlign="center" mt={8}>
      <Heading size="lg" mb={4}>No Data</Heading>
      <Box>
        No data available
      </Box>
    </Box>
  );
};

export default NoData;
