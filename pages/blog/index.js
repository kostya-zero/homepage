import { Text, Box, Heading, HStack } from "@chakra-ui/react";

function Blog() {
  return (
    <>
      <Box margin="15px" marginTop="30px">
        <HStack flex={1}>
          <Heading variant="header">Blog</Heading>
        </HStack>
        <Text fontSize="md">
          This section is not available at this moment. It will be available
          with updates.
        </Text>
      </Box>
    </>
  );
}

export default Blog;
