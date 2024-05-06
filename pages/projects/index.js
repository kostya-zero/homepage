import { Text, Box, Container, Heading, HStack, Badge, Link, Card, CardBody, CardHeader, Spacer } from "@chakra-ui/react";
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

                <Card variant="nohover" margin="15px">

                    <CardBody>
                        <HStack>
                            <Heading variant="section">Enjo</Heading>
                            <Badge colorScheme="gray">WIP</Badge>
                            <Spacer/>
                            <Badge as={Link} href="https://github.com/kostya-zero/enjo" colorScheme="gray">GitHub</Badge>
                            <Badge as={Link} href="https://git.kostyazero.com/kostya-zero/enjo" colorScheme="green">Gitea</Badge>
                        </HStack>
                        <Text>
                            Workspace management tool that aims to help developers manage their projects a little easier.
                            Currently under development.
                        </Text>
                    </CardBody>
                </Card>

                <Card variant="nohover" margin="15px">
                    <CardBody>
                        <HStack>
                            <Heading variant="section">Resup</Heading>
                            <Spacer/>
                            <Badge as={Link} href="https://github.com/kostya-zero/resup" colorScheme="gray">GitHub</Badge>
                            <Badge as={Link} href="https://git.kostyazero.com/kostya-zero/resup" colorScheme="green">Gitea</Badge>
                        </HStack>
                        <Text>
                            Resup is CLI front-end for realesrgan-ncnn-vulkan image upscaler written in Rust.
                            It allows you quickly upscale your images directly in CLI.
                        </Text>
                    </CardBody>
                </Card>

                <Card variant="nohover" margin="15px">
                    <CardBody>
                        <HStack flex={1}>
                            <Heading variant="section">Tesuto</Heading>
                            <Spacer/>
                            <Badge as={Link} href="https://github.com/kostya-zero/tesuto" colorScheme="gray">GitHub</Badge>
                            <Badge as={Link} href="https://git.kostyazero.com/kostya-zero/tesuto" colorScheme="green">Gitea</Badge>
                        </HStack>
                        <Text>
                            Tesuto is a minimalist and lightweight tool for testing.
                            Tesuto designed to be easy to set up and be as fast as possible.
                            Tesuto allows developers to focus on solving deployment problems.
                        </Text>
                    </CardBody>
                </Card>
                <Footer />
            </Container>
        </>
    );
}

export default Projects;
