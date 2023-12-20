import { Text, Box, Container, Heading, HStack } from "@chakra-ui/react";
import Footer from "@/components/Footer";

function Blog() {
  return (
    <>
      <Container justifyContent="left" maxW={650} marginLeft="auto" zIndex="1" marginRight="auto">
        <Box margin="15px" marginTop="30px">
          <HStack flex={1}>
            <Heading variant="header">Blog</Heading>
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

export default Blog;
