import { Text, Box, Container, Heading, HStack, Badge } from "@chakra-ui/react";
import { useEffect } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"

function Projects() {
    useEffect(() => {
        document.title = "Konstantin Zero - Projects"
    })

    function open_kamiya_gl() {
        window.open("https://gitlab.com/kostya-zero/kamiya", "_blank", 'noopener,noreferrer')
    }
    function open_kamiya_gh() {
        window.open("https://github.com/kostya-zero/kamiya", "_blank", 'noopener,noreferrer')
    }
    function open_kamiya_cio() {
        window.open("https://crates.io/crates/kamiya", "_blank", 'noopener,noreferrer')
    }

    function open_pipe_gl() {
        window.open("https://gitlab.com/kostya-zero/pipe", "_blank", 'noopener,noreferrer')
    }
    function open_pipe_gh() {
        window.open("https://github.com/kostya-zero/pipe", "_blank", 'noopener,noreferrer')
    }

    function open_resup_gl() {
        window.open("https://gitlab.com/kostya-zero/resup", "_blank", 'noopener,noreferrer')
    }
    function open_resup_gh() {
        window.open("https://github.com/kostya-zero/resup", "_blank", 'noopener,noreferrer')
    }
        

    return (
        <>
        <Container justifyContent="left" maxW={750} marginLeft="auto" marginRight="auto">
            <NavBar/>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700} fontFamily="Kalam">Projects.</Heading>
                </HStack>
                <Text fontSize="lg">
                    Down below you can see all my projects that am I working now.
                </Text>
            </Box>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700} fontFamily="Kalam">Kamiya</Heading>
                    <Box flex={1} align="right">
                        <Text>Available on</Text>
                        <Badge colorScheme="orange" align="right" onClick={open_kamiya_gl} cursor="pointer">GitLab</Badge>
                        <Badge colorScheme="gray" align="right" marginLeft="5px" onClick={open_kamiya_gh} cursor="pointer">GitHub</Badge>
                        <Badge colorScheme="yellow" align="right" marginLeft="5px" onClick={open_kamiya_cio} cursor="pointer">crates.io</Badge>
                    </Box>
                </HStack>
                <Text fontSize="lg">
                    An easy and lightweight tool to create and manage notes in terminal.
                    You can easily access your notes from terminal. 
                    Also support editing in external text editor.
                </Text>
            </Box>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700} fontFamily="Kalam">Pipe</Heading>
                    <Box flex={1} align="right">
                        <Text>Available on</Text>
                        <Badge colorScheme="orange" align="right" onClick={open_pipe_gl} cursor="pointer">GitLab</Badge>
                        <Badge colorScheme="gray" align="right" marginLeft="5px" onClick={open_pipe_gh} cursor="pointer">GitHub</Badge>
                    </Box>
                </HStack>
                <Text fontSize="lg">
                    A build system for your Python project that uses Nuitka as a backend.
                    They use Nuitka, which uses C compilers to compile applications and makes them fast and independent of Python runtime. 
                </Text>
            </Box>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700} fontFamily="Kalam">Resup</Heading>
                    <Box flex={1} align="right">
                        <Text>Available on</Text>
                        <Badge colorScheme="orange" align="right" onClick={open_resup_gl} cursor="pointer">GitLab</Badge>
                        <Badge colorScheme="gray" align="right" marginLeft="5px" onClick={open_resup_gh} cursor="pointer">GitHub</Badge>
                    </Box>
                </HStack>
                <Text fontSize="lg">
                    A CLI front-end for Real-ESRGAN ncnn Vulkan image upscaler written in Rust.
                    It allows you quickly upscale your images directly in terminal.
                </Text>
            </Box>
            <Footer/>
        </Container>
        </>
    )
}

export default Projects;
