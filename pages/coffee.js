import { Text, Box, Heading } from "@chakra-ui/react";

function GreenTea() {
  return (
    <>
      <Box margin="20px" marginTop="35px" flex={1} marginBottom="30px">
        <Heading fontSize="6xl" fontWeight={700} w="100%" textAlign="center">
          418
        </Heading>
        <Text fontSize="md" textAlign="center" fontStyle="italic">
          I&apos;m a teapot!
        </Text>
      </Box>
    </>
  );
}

export default GreenTea;
