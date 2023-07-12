import { Text, Box, Container, Heading, HStack } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"
import { useEffect } from "react";

function GreenTea() {
    useEffect(() => {
        document.title = "Konstantin Zero - Teapot"
    })
    return (
        <>
        <Container justifyContent="left" maxW={750} marginLeft="auto" marginRight="auto">
            <NavBar/>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="5xl" fontWeight={700} fontFamily="Kalam">418</Heading>
                </HStack>
                <Text fontSize="xl">
                    I'm a teapot
                </Text>
            </Box>
            <Footer/>
        </Container>
        </>
    )
}

export default GreenTea;
