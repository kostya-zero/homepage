import { Text, Box, Container, Heading, HStack, Badge } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import { FaComment, FaTelegram, FaMailBulk, FaGithub, FaMastodon, FaGitAlt } from "react-icons/fa";
import SocialCard from "@/components/SocialCard";

export default function Contacts() {

    return (
        <>
            <Container justifyContent="left" maxW={650} marginLeft="auto" marginRight="auto">
                <Box margin="15px" marginTop="30px">
                    <HStack flex={1}>
                        <Heading variant="header">Socials</Heading>
                    </HStack>
                    <Text>List of profile in social networks and chats.</Text>
                </Box>
                <Box margin="15px" marginTop="25px" >
                    <HStack flex={1}>
                        <Heading variant="section">Contacts</Heading>

                    </HStack>
                    <Text >
                        You can ask me a question or simply talk to me by the ways below.
                    </Text>
                    <SocialCard url="mailto:zero@kostyazero.com" tooltip="My email address." social_name="Email" social_detail="zero@kostyazero.com" icon={<FaMailBulk />} />
                    <SocialCard url="https://matrix.to/#/@zero:kostyazero.com" tooltip="https://matrix.to/#/@zero:kostyazero.com" social_name="Martix" social_detail="@zero:kostyazero.com" icon={<FaComment />} />
                    <SocialCard url="https://t.me/@kostya_zer0" tooltip="https://t.me/@kostya_zer0" social_name="Telegram" social_detail="@kostya_zer0" icon={<FaTelegram />} />
                </Box>
                <Box margin="15px" marginTop="20px" >
                    <HStack flex={1}>
                        <Heading variant="section">Blogs</Heading>
                    </HStack>
                    <Text>
                        I have blogs on Mastodon (usually posting there).
                    </Text>
                    <SocialCard url="https://mastodon.ml/@kostya_zer0" tooltip="https://mastodon.ml/@kostya_zer0" social_name="Mastodon" social_detail="@kostya_zer0@mastodon.ml" icon={<FaMastodon />} />
                </Box>
                <Box margin="15px" marginTop="20px" >
                    <HStack flex={1}>
                        <Heading variant="section">Repositories</Heading>
                    </HStack>
                    <Text >
                        If you interested, you can check my repositories on my own Forgejo instance and GitHub!
                    </Text>
                    <SocialCard url="https://git.kostyazero.com/kostya-zero" tooltip="https://git.kostyazero.com/kostya-zero" social_name="My Gitea" social_detail="kostya-zero" icon={<FaGitAlt />} />
                    <SocialCard url="https://github.com/kostya-zero" tooltip="https://github.com/kostya-zero" social_name="GitHub" social_detail="kostya-zero" icon={<FaGithub />} />
                </Box>
                <Footer />
            </Container>
        </>
    )
}
