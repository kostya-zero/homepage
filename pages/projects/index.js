import {Text, Box, Container, Heading, HStack, Badge, Link} from "@chakra-ui/react";
import Footer from "@/components/Footer";

function Projects() {
    return (
        <>
            <Container
                justifyContent="left"
                maxW={650}
                marginLeft="auto"
                marginRight="auto"
            >
                <Box margin="15px" marginTop="30px">
                    <HStack flex={1}>
                        <Heading variant="header">
                            Projects
                        </Heading>
                    </HStack>
                    <Text fontSize="md">List of projects that I am working on.</Text>
                </Box>
                <Box margin="15px" marginTop="25px" >
                    <HStack flex={1}>
                        <Heading variant="section">Resup</Heading>
                        <Badge as={Link} href="https://github.com/kostya-zero/resup" colorScheme="gray">GitHub</Badge>
                        <Badge as={Link} href="https://git.kostyazero.com/kostya-zero/resup" colorScheme="green">Gitea</Badge>
                    </HStack>
                    <Text>
                        Resup is CLI front-end for realesrgan-ncnn-vulkan image upscaler written in Rust.
                        It allows you quickly upscale your images directly in CLI.
                    </Text>
                </Box>
                <Box margin="15px" marginTop="25px" >
                    <HStack flex={1}>
                        <Heading variant="section">Tesuto</Heading>
                        <Badge as={Link} href="https://github.com/kostya-zero/tesuto" colorScheme="gray">GitHub</Badge>
                        <Badge as={Link} href="https://git.kostyazero.com/kostya-zero/tesuto" colorScheme="green">Gitea</Badge>
                    </HStack>
                    <Text>
                        Tesuto is a minimalist and lightweight tool for testing.
                        Tesuto designed to be easy to set up and be as fast as possible.
                        Tesuto allows developers to focus on solving deployment problems.
                    </Text>
                </Box>
                <Footer/>
            </Container>
        </>
    );
}

export default Projects;
