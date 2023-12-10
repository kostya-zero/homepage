import { Text, Box, Container, Heading, HStack } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar"

function GreenTea() {
  return (
    <>
      <Container justifyContent="left" maxW={650} marginLeft="auto" marginRight="auto">
        <NavBar />
        <Box margin="20px" marginTop="35px" >
          <Heading fontSize="4xl" fontWeight={700}>418</Heading>
          <Text fontSize="md">
            I&apos;m a teapot
          </Text>
        </Box>
        <Footer />
      </Container>
    </>
  )
}

export default GreenTea;
