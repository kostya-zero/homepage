import { Container, Link, Text } from "@chakra-ui/react";

function Footer() {
    return (
        <>
            <Container marignTop="45px">
                <Text textAlign={`center`} fontSize="sm" variant="footer-text" marginBottom="45px">
                    Made by kostya_zer0 with ❤️.  Source code is available on <Link variant="def" href="https://github.com/kostya-zero/homepage">GitHub</Link>.
                </Text>
            </Container>
        </>
    );
}

export default Footer;
