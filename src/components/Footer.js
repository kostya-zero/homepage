import { Container, Text } from "@chakra-ui/react";

function Footer() {
    return (
        <>
            <Container marignTop="45px">
                <Text textAlign={`center`} variant="footer-text" marginBottom="45px">
                    Made by kostya_zer0 with ❤️. Sources are available on GitLab and GitHub.
                </Text>
            </Container>
        </>
    );
}

export default Footer;
