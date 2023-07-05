import { Text, Box, Container, Heading, HStack, Image, SkeletonCircle } from "@chakra-ui/react";
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
                    <Heading fontSize="4xl" fontWeight={700} >Welcome.</Heading>
                    <Box flex={1} align="right">
                        <SkeletonCircle isLoaded size="10">
                            <Image src="https://avatars.githubusercontent.com/u/89439507"  rounded="full" alt="Avatar from github." boxShadow="md"
                            title="My avatar from GitHub." />
                        </SkeletonCircle>
                    </Box>
                </HStack>
                <Text fontSize="lg">
                    Hello! My name is Kostya. 
                    I'm a 17 years old high school student and full-stack indie developer. 
                    Programming is my main hobby. I prefer to use Rust and Python for my projects (but usually first one). 
                    I started my hobby in 2017 and doing better day-by-day. 
                    Likewise, I develop application by principal 'One program do one thing well'.
                </Text>
            </Box>
            <Box margin="20px" marginTop="35px" >
                <HStack flex={1}>
                    <Heading fontSize="4xl" fontWeight={700}>My journey.</Heading>
                </HStack>
                <Text fontSize="lg">
                    <b>May 2017</b> &bull; Started learning PHP to make application in PHP DevelStudio. <br/>
                    <b>June 2019</b> &bull; Begin switch to C# to make applications with WinForms and WPF. <br/>
                    <b>February 2020</b> &bull; Finally switched to C# and started learning Python as second language. <br/>
                    <b>July 2021</b> &bull; Finished learning C# and Python. <br/>
                    <b>April 2022</b> &bull; Switched to Linux and started learning Rust to switch from C#. <br/>
                    <b>January 2023</b> &bull; Finished learning Rust and broke up with C#. <br/>
                </Text>
            </Box>

            <Footer/>
        </Container>
        </>
    )
}

export default Home;
