import { Text, Box, Container, Heading, HStack, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"

function Home() {
    useEffect(() => {
        document.title = "Konstantin Zero - Home"
    })
    return (
        <>
        <Container justifyContent="left" maxW={750} marginLeft="auto" marginRight="auto">
            <NavBar/>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="5xl" fontWeight={700} >Welcome.</Heading>
                    <Box flex={1} align="right">
                        <Image src="https://avatars.githubusercontent.com/u/89439507" width="48px" rounded="full" alt="Avatar from github."
                        title="My avatar from GitHub." />
                    </Box>
                </HStack>
                <Text fontSize="xl">
                    Hello! My name is Kostya. 
                    I'm a 17 years old high school student and full-stack indie developer. 
                    Programming is my main hobby. I prefer to use Rust and Python for my projects (but usually first one). 
                    I started my hobby in 2017 and doing better day-by-day. 
                    Likewise, I develop application by principal 'One program do one thing well'.
                </Text>
            </Box>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="5xl" fontWeight={700}>My journey.</Heading>
                </HStack>
                <Text fontSize="xl">
                    <b>May 2017</b> &bull; Started learning PHP to make application in PHP DevelStudio. <br/>
                    <b>June 2019</b> &bull; Begin switch to C# to make applications with WinForms and WPF. <br/>
                    <b>February 2020</b> &bull; Finally switched to C# and started learning Python as second language. <br/>
                    <b>July 2021</b> &bull; Finished learning C# and Python. <br/>
                    <b>April 2022</b> &bull; Switched to Linux and started learning Rust to switch from C#. <br/>
                    <b>January 2023</b> &bull; Finished learning Rust and broke up with C#. <br/>
                </Text>
            </Box>

            <Box margin="20px" marginTop="35px">
                <HStack flex={1}>
                    <Heading fontSize="5xl" fontWeight={700}>Socials.</Heading>
                </HStack>
                <Text fontSize="xl">
                    You can contact me in <a href="https://matrix.to/#/@kostya_zer0:debilosempire.org" target="_blank"><u><b>Matrix</b></u></a> and <a href="https://t.me/@kostya_zer0" target="_blank"><u><b>Telegram</b></u></a>.
                    Also you can visit my blog on <a href="https://md.debilosempire.org/@kostya_zero" target="_blank"><u><b>Mastodon</b></u></a> and view my repostories on <a href="https://github.com/kostya-zero" target="_blank"><u><b>GitHub</b></u></a> and <a href="https://gitlab.com/kostya-zero" target="_blank"><u><b>GitLab</b></u></a>.
                    You can view full list on <a href="https://keyoxide.org/00E97048196E61A5738B6C642ECD17D85F3ACBA5" target="_blank"><u><b>Keyoxide</b></u></a>.
                </Text>
            </Box>
            <Footer/>
        </Container>
        </>
    )
}

export default Home;
