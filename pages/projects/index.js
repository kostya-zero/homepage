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
                <Box margin="15px" marginTop="20px">
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
                            <Spacer/>
                            <Badge as={Link} href="https://github.com/kostya-zero/enjo" colorScheme="gray">GitHub</Badge>
                            <Badge as={Link} href="https://git.kostyazero.com/kostya-zero/enjo" colorScheme="green">Gitea</Badge>
                        </HStack>
                        <Text>
                            A project management tool that allows a user to easily manager their projects.
                            Enjo also can open editor/shell in selected project. 
                            Will be suitable for users that use terminal frequently.
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
                        A cross-platform terminal fronted for <code>realesrgan-ncnn-vulkan</code> image upscaler that is easy to configure.
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
                            Tesuto is a lightweight automation tool focused on speed and UX.
                            User can write a configuration file using an intuitive layout and YAML syntax.
                        </Text>
                    </CardBody>
                </Card>
                <Footer />
            </Container>
        </>
    );
}

export default Projects;
