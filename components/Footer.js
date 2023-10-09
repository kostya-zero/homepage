import { Container, Text } from "@chakra-ui/react";

function Footer() {
    return (
        <>
            <Container marignTop="45px">
                <Text textAlign={`center`} fontSize="sm" variant="footer-text" marginBottom="45px">
                    Made by kostya_zer0 with ❤️.  Source code is available on GitHub.
                </Text>
            </Container>
        </>
    );
}

export default Footer;
