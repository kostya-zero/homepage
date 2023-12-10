import { Text, Box, Container, Heading, HStack, Img, Skeleton } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar"

function Workspace() {
  return (
    <>
      <Container justifyContent="left" maxW={650} marginLeft="auto" zIndex="1" marginRight="auto">
        <NavBar />
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
