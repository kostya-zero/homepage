import { Badge, Link, IconButton, Container, Box, HStack, Heading, Text } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Resup() {
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
          <HStack flex={1}>
            <IconButton variant="ghost" icon={<FaArrowLeft />} onClick={() => { go_back() }} />
            <Heading fontSize="4xl">
              Tesuto
            </Heading>
          </HStack>
          <Text marginBottom="15px" fontSize="lg">
            Tesuto is a minimalist and lightweight tool for testing.
            Tesuto designed to be easy to set up and be as fast as possible.
            Tesuto allows developers to focus on solving deployment problems.
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
            <Link href="https://github.com/kostya-zero/tesuto" isExternal>https://github.com/kostya-zero/tesuto</Link>
          </HStack>
        </Box>
        <Footer />
      </Container>
    </>
  );
}
