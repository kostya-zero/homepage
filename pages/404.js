import { Text, Box, Container, Heading } from "@chakra-ui/react";
import Footer from "@/components/Footer";

function NotFound() {
  return (
    <>
      <Container justifyContent="left" maxW={650} marginLeft="auto" marginRight="auto">
        <Box margin="20px" marginTop="35px" flex={1} justifyContent="center">
          <Heading fontSize="4xl" fontWeight={700} >404</Heading>
          <Text fontSize="md">
            How did you get there? Use menu to go back.
          </Text>
        </Box>
        <Footer />
      </Container>
    </>
  )
}

export default NotFound;
