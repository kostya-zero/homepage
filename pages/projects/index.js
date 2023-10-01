import ProjectCard from "@/components/ProjectCard";
import { SimpleGrid, Text, Box, Container, Heading, HStack, Badge } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

function Projects() {

  return (
    <>
      <Container
        justifyContent="left"
        maxW={750}
        marginLeft="auto"
        marginRight="auto"
      >
        <NavBar />
        <Box margin="15px" marginTop="20px">
          <HStack flex={1}>
            <Heading fontSize="6xl" textDecoration="underline" fontWeight={700}>
              Projects.
            </Heading>
          </HStack>
          <Text fontSize="lg">List of projects that I am working on.</Text>
        </Box>
        <Box margin="15px" marginTop="10px">
          <SimpleGrid columns={[1, null, 1]} spacing={3}>
            <ProjectCard image="projects/kamiya.svg" name="Kamiya" desc="No-nonsense note taking app for terminal." />
            <ProjectCard image="projects/resup.svg" name="Resup" desc="A terminal frontend for Real-ESRGAN. " />
            <ProjectCard image="projects/tesuto.svg" name="Tesuto" desc="Lightweight testing tool. " />
          </SimpleGrid>
        </Box>
        <Footer />
      </Container>
    </>
  );
}

export default Projects;
