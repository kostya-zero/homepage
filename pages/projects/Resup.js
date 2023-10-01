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
        maxW={750}
        marginLeft="auto"
        marginRight="auto"
      >
        <NavBar />
        <Box margin="15px" marginTop="20px">
          <HStack flex={1}>
            <IconButton variant="ghost" icon={<FaArrowLeft />} onClick={() => { go_back() }} />
            <Heading fontSize="5xl">
              Resup
            </Heading>
          </HStack>
          <Text marginBottom="15px" fontSize="lg">
            Resup is CLI front-end for realesrgan-ncnn-vulkan image upscaler written in Rust.
            It allows you quickly upscale your images directly in CLI.
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
            <Link href="https://github.com/kostya-zero/resup" isExternal>https://github.com/kostya-zero/resup</Link>
          </HStack>
        </Box>
        <Footer />
      </Container>
    </>
  );
}
