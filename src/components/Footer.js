import { Container, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import getRandomPhrase from "./RandomPhrase";

function Footer() {
    const [randomPhrase, setRandomPhrase] = useState(getRandomPhrase())

    useEffect(() => {
        handleReload()
    }, [])

    const handleReload = () => {
        const phrase = getRandomPhrase()
        setRandomPhrase(phrase)
    }

    return (
        <>
            <Container marignTop="45px">
                <Text textAlign={`center`} fontSize="xl" marginBottom="10px">
                    {randomPhrase}
                </Text>
                <Text textAlign={`center`} opacity="0.7" marginBottom="45px">
                    Made by kostya_zer0 with ❤️. Sources are available on GitLab and GitHub.
                </Text>
            </Container>
        </>
    );
}

export default Footer;
