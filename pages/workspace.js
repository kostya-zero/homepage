import { Text, Box, Container, Heading, HStack, ScaleFade } from "@chakra-ui/react";
import Footer from "@/components/Footer";

function Workspace() {
  return (
    <>
      <Container justifyContent="left" maxW={650} marginLeft="auto" zIndex="1" marginRight="auto">
        <Box margin="15px" marginTop="30px">
          <HStack flex={1}>
            <Heading variant="header">Workspace</Heading>
          </HStack>
          <Text fontSize="md">
            This section is not available at this moment.
            It will be available with updates.
          </Text>
        </Box>
        <Footer />
      </Container>
    </>
  )
}

export default Workspace;
