import { Text, Box, Container, Heading, HStack, Card, CardBody, useColorModeValue } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"
import { useEffect } from "react";
import { FaComment, FaTelegram, FaMailBulk, FaGitlab, FaGithub, FaMastodon } from "react-icons/fa";
import SocialCard from "../components/SocialCard";

function Contacts() {
    useEffect(() => {
        document.title = "Konstantin Zero - Contacts"
    })

    return (
        <>
        <Container justifyContent="left" maxW={750} marginLeft="auto" marginRight="auto">
            <NavBar/>
            <Box margin="15px" marginTop="20px">
                <HStack flex={1}>
                    <Heading fontSize="6xl" fontWeight={700} textDecoration="underline">Contacts.</Heading>
                </HStack>
            </Box>
            <Box margin="15px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700}>Email.</Heading>
                </HStack>
                <Text fontSize="lg">
                    The only one mailbox where you can send me an email.
                </Text>
                <SocialCard url="mailto:kostya.zero@outlook.com" tooltip="mailto:kostya.zero@outlook.com" social="kostya.zero@outlook.com" icon={<FaMailBulk/>}/>
            </Box>
            <Box margin="15px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700}>Blogs.</Heading>
                </HStack>
                <Text fontSize="lg">
                    I have blogs on Mastodon (usually posting there). 
                </Text>
                <SocialCard url="https://md.debilosempire.org/@kostya_zero" tooltip="https://md.debilosempire.org/@kostya_zero" social="Mastodon [@kostya_zero@md.debilosempire.org]" icon={<FaMastodon/>}/>
            </Box>
            <Box margin="15px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700}>Chats.</Heading>
                </HStack>
                <Text fontSize="lg">
                    That&apos;s where you can contact me for any questions. 
                    Note that I can not respond for a long time.
                </Text>
                <SocialCard url="https://matrix.to/#/@kostya_zer0:debilosempire.org" tooltip="https://matrix.to/#/@kostya_zer0:debilosempire.org" social="Martix [@kostya_zer0:debilosempire.org]" icon={<FaComment/>}/>
                <SocialCard url="https://t.me/@kostya_zer0" tooltip="https://t.me/@kostya_zer0" social="Telegram [@kostya_zer0]" icon={<FaTelegram/>}/>
            </Box>
            <Box margin="15px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700}>Repositories.</Heading>
                </HStack>
                <Text fontSize="lg">
                    I have repoistories on GitLab and GitHub (mirror). 
                </Text>

                <SocialCard url="https://gitlab.com/kostya-zero" tooltip="https://gitlab.com/kostya-zero" social="kostya-zero" icon={<FaGitlab/>}/>
                <SocialCard url="https://github.com/kostya-zero" tooltip="https://github.com/kostya-zero" social="kostya-zero" icon={<FaGithub/>}/>
            </Box>
            <Footer/>
        </Container>
        </>
    )
}

export default Contacts;
