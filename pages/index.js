import { Text, Box, Container, HStack, Img, SkeletonCircle, Heading } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"

function Home() {
  return (
    <>
      <Container justifyContent="left" maxW={650} marginLeft="auto" marginRight="auto">
        <NavBar />
        <Box margin="15px" marginTop="30px" >
          <HStack flex={1}>
            <Heading variant="header">Welcome</Heading>
            <Box flex={1} align="right">
              <SkeletonCircle isLoaded size="10" fadeDuration={1}>
                <Img src="https://avatars.githubusercontent.com/u/89439507" rounded="full" alt="Avatar from GitHub." boxShadow="md"
                  title="My avatar from GitHub." />
              </SkeletonCircle>
            </Box>
          </HStack>
          <Text>
    This is my own homepage. Glad to see you!
          </Text>
        </Box>
        <Box margin="15px" marginTop="20px" >
          <HStack flex={1}>
            <Heading variant="section">About me</Heading>
          </HStack>
          <Text >
            Hello! My name is <b>Kostya</b>.
            I&apos;m a 17 years old high school student, system administrator and indie developer.
            I use Rust as my main programming language to build software and Python for scripts and small programs.
            I work alone and deal with design, concepts and code by myself.
          </Text>
        </Box>
        <Box margin="15px" marginTop="20px" >
          <HStack flex={1}>
            <Heading variant="section">Website</Heading>
          </HStack>
          <Text >
            I am working on my website at this moment by trying to use different design concepts, language etc.
            This is not a final variant, so you can consider this website as <i>under construction but in production at the same time</i>.
          </Text>
        </Box>
        <Footer />
      </Container>
    </>
  )
}

export default Home;
