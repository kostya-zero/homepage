import { Text, Box, Heading } from "@chakra-ui/react";

function NotFound() {
  return (
    <>
      <Box margin="20px" marginTop="35px" flex={1} marginBottom="30px">
        <Heading fontSize="6xl" fontWeight={700} w="100%" textAlign="center">
          404
        </Heading>
        <Text fontSize="md" textAlign="center" fontStyle="italic">
          You weren&apos;t supposed to be here...
        </Text>
      </Box>
    </>
  );
}

export default NotFound;
