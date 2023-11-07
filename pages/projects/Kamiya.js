import { Badge, Link, IconButton, Container, Box, HStack, Heading, Text } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Kamiya() {
  const navigate = useRouter();
  function go_back() {
    navigate.push("/projects")
  }

  return (
    <>
      <Container
        justifyContent="left"
        maxW={650}
        marginLeft="auto"
        marginRight="auto"
      >
        <NavBar />
        <Box margin="15px" marginTop="20px">
          <HStack flex={1} marginBottom="5px">
            <IconButton variant="ghost" icon={<FaArrowLeft />} onClick={() => { go_back() }} />
            <Heading fontSize="4xl">
              Kamiya
            </Heading>
          </HStack>
          <Text marginBottom="15px" >
            Kamiya is a no-nonsense note taking app that runs in terminal.
            It stores all your notes in database so it makes easier to store your notes.
          </Text>
          <HStack>
            <Badge>Platform</Badge>
            <Text>Linux, Windows, macOS</Text>
          </HStack>
          <HStack>
            <Badge>Stack</Badge>
            <Text>Rust</Text>
          </HStack>
          <HStack>
            <Badge>Repository</Badge>
            <Link href="https://github.com/kostya-zero/kamiya" isExternal>https://github.com/kostya-zero/kamiya</Link>
          </HStack>
        </Box>
        <Footer />
      </Container>
    </>
  );
}
