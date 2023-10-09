import { Text, Box, Container, Heading, HStack, Img, SkeletonCircle } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"

function Home() {
  return (
    <>
      <Container justifyContent="left" maxW={650} marginLeft="auto" marginRight="auto">
        <NavBar />
        <Box margin="15px" marginTop="35px" >
          <HStack flex={1}>
            <Heading fontSize="4xl" fontWeight={700} >Welcome.</Heading>
            <Box flex={1} align="right">
              <SkeletonCircle isLoaded size="10" fadeDuration={1}>
                <Img src="https://avatars.githubusercontent.com/u/89439507" rounded="full" alt="Avatar from GitHub." boxShadow="md"
                  title="My avatar from GitHub." />
              </SkeletonCircle>
            </Box>
          </HStack>
          <Text fontSize="md">
            Hello! My name is <b>Kostya</b>.
            I&apos;m a 17 years old high school student, system administrator and indie developer.
            I use Rust as my main programming language to build software and Python for scripts and small programs.
            I work alone and deal with design, concepts and code by myself.
            I love working with computers and help people learn programming.
            In free time watching anime, playing games, listening to music, reading books and manga.
          </Text>
        </Box>
        <Box margin="15px" marginTop="35px" >
          <HStack flex={1}>
            <Heading fontSize="4xl" fontWeight={700}>Navigation.</Heading>
          </HStack>
          <Text fontSize="md">
            Use menu button at top right to navigate through website.
          </Text>
        </Box>
        <Footer />
      </Container>
    </>
  )
}

export default Home;
