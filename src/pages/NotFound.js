import { Text, Box, Container, Heading, HStack } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"
import { useEffect } from "react";

function NotFound() {
    useEffect(() => {
        document.title = "Konstantin Zero - Not Found"
    })
    return (
        <>
        <Container justifyContent="left" maxW={750} marginLeft="auto" marginRight="auto">
            <NavBar/>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="5xl" fontWeight={700} fontFamily="Kalam">404</Heading>
                </HStack>
                <Text fontSize="xl">
                    How did you get there?
                </Text>
            </Box>
            <Footer/>
        </Container>
        </>
    )
}

export default NotFound;
