import { Text, Box, Container, Heading, HStack,  Image } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"
import { useEffect } from "react";

function Workspace() {
    useEffect(() => {
        document.title = "Konstantin Zero - Workspace"
    })

    function open_dekstop_img() {
        window.open("desktop.png", "_blank", 'noopener,noreferrer')
    }

    function open_editor_img() {
        window.open("editor.png", "_blank", 'noopener,noreferrer')
    }

    function open_shell_img() {
        window.open("shell.png", "_blank", 'noopener,noreferrer')
    }

    return (
        <>
        <Container justifyContent="left" maxW={750} marginLeft="auto" marginRight="auto">
            <NavBar/>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700} fontFamily="Kalam">Workspace.</Heading>
                </HStack>
                <Text fontSize="xl">
                    That is a curated list of what am I using.
                </Text>
            </Box>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700} fontFamily="Kalam">Main OS.</Heading>
                </HStack>
                <Text fontSize="lg">
                    As my main operating system I use Fedora.
                    I have switched to them month ago (I was an ArchLinux user for year btw).
                    I use the default GNOME with some extenstion and Marble theme.
                </Text>
                <Image src="desktop.png" borderRadius="5px" boxShadow="md" cursor="pointer" onClick={open_dekstop_img} alt="GNOME with some tweaks." marginTop="10px" 
                transition="transform .2s"
                _hover={{
                    transform: "scale(1.03)",
                    boxShadow: "xl"
                }} title="Click to open image in new tab."/>
            </Box>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700} fontFamily="Kalam">Editor.</Heading>
                </HStack>
                <Text fontSize="lg">
                    As code editor I use <b>Neovim</b>. 
                    It's my endpoint in searching of the best code editor for me.
                    I was using JetBrains software for many years, but when I switched to Linux I decided to change my common workspace.
                    I love Neovim for their customization and configuration.
                </Text>
                <Image src="editor.png" borderRadius="10px" onClick={open_editor_img} cursor="pointer" alt="GNOME with some tweaks." marginTop="10px"
                transition="transform .2s"
                _hover={{
                    transform: "scale(1.03)",
                }} title="Click to open image in new tab."/>
            </Box>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700} fontFamily="Kalam">Shell.</Heading>
                </HStack>
                <Text fontSize="lg">
                    As shell I use <b>fish</b>.
                    I was using zsh for the first time, but switched to fish because it's works out-of-box.
                    By the way, I use Alacritty as terminal emulator.
                </Text>
                <Image src="shell.png" borderRadius="5px" onClick={open_shell_img} cursor="pointer" alt="GNOME with some tweaks." marginTop="10px" 
                transition="transform .2s"
                _hover={{
                    transform: "scale(1.03)"
                }} title="Click to open image in new tab."/>
            </Box>
            <Footer/>
        </Container>
        </>
    )
}

export default Workspace;
