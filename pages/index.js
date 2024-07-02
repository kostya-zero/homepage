import {
  Text,
  Box,
  HStack,
  Img,
  SkeletonCircle,
  Heading,
} from "@chakra-ui/react";

function Home() {
  return (
    <>
      <Box margin="15px" marginTop="20px">
        <HStack flex={1}>
          <Heading variant="header">Welcome</Heading>
          <Box flex={1} align="right">
            <SkeletonCircle isLoaded size="10" fadeDuration={1}>
              <Img
                src="https://avatars.githubusercontent.com/u/89439507"
                rounded="full"
                alt="Avatar from GitHub."
                boxShadow="md"
                title="My avatar from GitHub."
              />
            </SkeletonCircle>
          </Box>
        </HStack>
        <Text>This is my own homepage. Glad to see you!</Text>
      </Box>
      <Box margin="15px" marginTop="20px">
        <HStack flex={1}>
          <Heading variant="section">About me</Heading>
        </HStack>
        <Text>
          Hello! My name is <b>Kostya</b>. I am 18 years old and a high school
          student, system administrator, and indie developer. I use Rust as my
          primary programming language to build software and Python for scripts
          and automation tasks. I work alone, handling design, concepts, and
          coding by myself.
        </Text>
      </Box>
      <Box margin="15px" marginTop="20px">
        <HStack flex={1}>
          <Heading variant="section">Website</Heading>
        </HStack>
        <Text>
          I am working on my website at this moment by trying to use different
          design concepts, language etc. This is not a final version, so you can
          consider this website as <i>early access</i>.
        </Text>
      </Box>
    </>
  );
}

export default Home;
