import { Text, Box, Container, Heading, HStack, Image, SkeletonCircle } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"

function Home() {
  return (
    <>
      <Container justifyContent="left" maxW={750} marginLeft="auto" marginRight="auto">
        <NavBar />
        <Box margin="20px" marginTop="35px" >
          <HStack flex={1}>
            <Heading fontSize="4xl" fontWeight={700} >Welcome.</Heading>
            <Box flex={1} align="right">
              <SkeletonCircle isLoaded size="10" fadeDuration={1}>
                <Image src="https://avatars.githubusercontent.com/u/89439507" rounded="full" alt="Avatar from GitHub." boxShadow="md"
                  title="My avatar from GitHub." />
              </SkeletonCircle>
            </Box>
          </HStack>
          <Text fontSize="lg">
            Hello! My name is Kostya.
            I&apos;m a 17 years old high school student and indie developer.
            I use Rust as my main programming language.
            I write software for developers and general users.
          </Text>
        </Box>
        <Box margin="20px" marginTop="35px" >
          <HStack flex={1}>
            <Heading fontSize="4xl" fontWeight={700}>Navigation.</Heading>
          </HStack>
          <Text fontSize="lg">
            Use menu on top right to navigate through sections (or guess routes, lol).
          </Text>
        </Box>
        <Footer />
      </Container>
    </>
  )
}

export default Home;
