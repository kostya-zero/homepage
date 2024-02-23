import { Text, Box, Container, Heading } from "@chakra-ui/react";
import Footer from "@/components/Footer";

function NotFound() {
  return (
    <>
      <Container justifyContent="left" maxW={650} marginLeft="auto" marginRight="auto">
        <Box margin="20px" marginTop="35px" flex={1} marginBottom="30px">
          <Heading fontSize="6xl" fontWeight={700} w="100%" textAlign="center">404</Heading>
          <Text fontSize="md" textAlign="center" fontStyle="italic"> 
            You weren't supposed to be here...
          </Text>
        </Box>
        <Footer />
      </Container>
    </>
  )
}

export default NotFound;
