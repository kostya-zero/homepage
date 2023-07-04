import { Text, Box, Container, Heading, HStack, Card, CardBody, CardHeader } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"
import { useEffect } from "react";
import { FaComment, FaTelegram, FaMailBulk, FaGitlab, FaGithub, FaMastodon } from "react-icons/fa";

function Contacts() {
    useEffect(() => {
        document.title = "Konstantin Zero - Contacts"
    })

    function open_email() {
        window.open("mailto:kostya.zero@outlook.com", "_blank", 'noopener,noreferrer')
    }

    function open_mastodon() {
        window.open("https://md.debilosempire.org/@kostya_zero", "_blank", 'noopener,noreferrer')
    }

    function open_matrix() {
        window.open("https://matrix.to/#/@kostya_zer0:debilosempire.org", "_blank", 'noopener,noreferrer')
    }

    function open_telegram() {
        window.open("https://t.me/@kostya_zer0", "_blank", 'noopener,noreferrer')
    }

    function open_gitlab() {
        window.open("https://gitlab.com/kostya-zero", "_blank", 'noopener,noreferrer')
    }

    function open_github() {
        window.open("https://github.com/kostya-zero", "_blank", 'noopener,noreferrer')
    }

    return (
        <>
        <Container justifyContent="left" maxW={750} marginLeft="auto" marginRight="auto">
            <NavBar/>
            <Box margin="15px" marginTop="20px">
                <HStack flex={1}>
                    <Heading fontSize="6xl" fontWeight={700} textDecoration="underline" fontFamily="Kalam">Contacts.</Heading>
                </HStack>
            </Box>
            <Box margin="15px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700} fontFamily="Kalam">Email.</Heading>
                </HStack>
                <Text fontSize="lg">
                    The only one mailbox where you can send me an email.
                </Text>
                <Card marginTop="15px" size="sm" onClick={open_email} title="mailto:kostya.zero@outlook.com" transition="all .2s" cursor="pointer" 
                    _hover={{
                        transform: "scale(1.03)",
                        boxShadow: "lg"
                    }}>
                    <CardBody>
                        <HStack flex={1}>
                            <Text fontWeight={700}>kostya.zero@outlook.com</Text>
                            <Box flex={1} align="right">
                                <FaMailBulk/>
                            </Box>
                        </HStack>
                    </CardBody>
                </Card>
            </Box>
            <Box margin="15px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700} fontFamily="Kalam">Blogs.</Heading>
                </HStack>
                <Text fontSize="lg">
                    I have blogs on Mastodon (usually posting there). 
                </Text>
                <Card marginTop="15px" size="sm" onClick={open_mastodon} title="https://md.debilosempire.org/@kostya_zero" transition="all .2s" cursor="pointer" 
                    _hover={{
                        transform: "scale(1.03)",
                        boxShadow: "lg"
                    }}>
                    <CardBody>
                        <HStack flex={1}>
                            <Text fontWeight={700}>Mastodon [@kostya_zer0@md.debilosempire.org]</Text>
                            <Box flex={1} align="right">
                                <FaMastodon/>
                            </Box>
                        </HStack>
                    </CardBody>
                </Card>
            </Box>
            <Box margin="15px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700} fontFamily="Kalam">Chats.</Heading>
                </HStack>
                <Text fontSize="lg">
                    That's where you can contact me for any questions. 
                    Note that I can not respond for a long time.
                </Text>

                <Card marginTop="15px" size="sm" onClick={open_matrix} title="https://matrix.to/#/@kostya_zer0:debilosempire.org" transition="all .2s" cursor="pointer" 
                    _hover={{
                        transform: "scale(1.03)",
                        boxShadow: "lg"
                    }}>
                    <CardBody>
                        <HStack flex={1}>
                            <Text fontWeight={700}>Matrix [@kostya_zer0:debilosempire.org]</Text>
                            <Box flex={1} align="right">
                                <FaComment/>
                            </Box>
                        </HStack>
                    </CardBody>
                </Card>
                <Card marginTop="15px" size="sm" onClick={open_telegram} title="https://t.me/@kostya_zer0" transition="all .2s" cursor="pointer" 
                    _hover={{
                        transform: "scale(1.03)",
                        boxShadow: "lg"
                    }}>
                    <CardBody>
                        <HStack flex={1}>
                            <Text fontWeight={700}>Telegram [@kostya_zer0]</Text>
                            <Box flex={1} align="right">
                                <FaTelegram/>
                            </Box>
                        </HStack>
                    </CardBody>
                </Card>
            </Box>
            <Box margin="15px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700} fontFamily="Kalam">Repositories.</Heading>
                </HStack>
                <Text fontSize="lg">
                    I have repoistories on GitLab and GitHub (mirror). 
                </Text>

                <Card marginTop="15px" size="sm" onClick={open_gitlab} title="https://gitlab.com/kostya-zero" transition="all .2s" cursor="pointer" 
                    _hover={{
                        transform: "scale(1.03)",
                        boxShadow: "lg"
                    }}>
                    <CardBody>
                        <HStack flex={1}>
                            <Text fontWeight={700}>kostya-zero </Text>
                            <Box flex={1} align="right">
                                <FaGitlab/>
                            </Box>
                        </HStack>
                    </CardBody>
                </Card>
                <Card marginTop="15px" size="sm" onClick={open_github} title="https://github.com/kostya-zero" transition="all .2s" cursor="pointer" 
                    _hover={{
                        transform: "scale(1.03)",
                        boxShadow: "lg"
                    }}>
                    <CardBody>
                        <HStack flex={1}>
                            <Text fontWeight={700}>kostya-zero </Text>
                            <Box flex={1} align="right">
                                <FaGithub/>
                            </Box>
                        </HStack>
                    </CardBody>
                </Card>
            </Box>
            <Footer/>
        </Container>
        </>
    )
}

export default Contacts;
