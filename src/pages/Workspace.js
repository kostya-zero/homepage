import { Text, Box, Container, Heading, HStack,  Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"
import { useEffect } from "react";

function Workspace() {
    useEffect(() => {
        document.title = "Konstantin Zero - Workspace"
    })
    const navigate = useNavigate();

    function open_dekstop_img() {
        navigate("desktop.png")
    }

    return (
        <>
        <Container justifyContent="left" maxW={750} marginLeft="auto" marginRight="auto">
            <NavBar/>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="5xl" fontWeight={700} fontFamily="Kalam">Workspace.</Heading>
                </HStack>
                <Text fontSize="xl">
                    That is a curated list of what am I using.
                </Text>
            </Box>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="5xl" fontWeight={700} fontFamily="Kalam">Main OS.</Heading>
                </HStack>
                <Text fontSize="xl">
                    As my main operating system I use Fedora.
                    I have switched to them month ago (I was an ArchLinux user for year btw).
                    I use the default GNOME with some extenstion and Marble theme.
                </Text>
                <Image src="desktop.png" borderRadius="5px" onClick={open_dekstop_img} alt="GNOME with some tweaks." marginTop="10px"/>
            </Box>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="5xl" fontWeight={700} fontFamily="Kalam">Editor.</Heading>
                </HStack>
                <Text fontSize="xl">
                    As code editor I use <b>Neovim</b>. 
                    It's my endpoint in searching of the best code editor for me.
                    I was using JetBrains software for many years, but when I switched to Linux I decided to change my common workspace.
                    I love Neovim for their customization and configuration.
                </Text>
                <Image src="editor.png" borderRadius="10px" onClick={open_dekstop_img} alt="GNOME with some tweaks." marginTop="10px"/>
            </Box>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="5xl" fontWeight={700} fontFamily="Kalam">Shell.</Heading>
                </HStack>
                <Text fontSize="xl">
                    As shell I use <b>fish</b>.
                    I was using zsh for the first time, but switched to fish because it's works out-of-box.
                    By the way, I use Alacritty as terminal emulator.
                </Text>
                <Image src="shell.png" borderRadius="5px" onClick={open_dekstop_img} alt="GNOME with some tweaks." marginTop="10px"/>
            </Box>
            <Footer/>
        </Container>
        </>
    )
}

export default Workspace;
