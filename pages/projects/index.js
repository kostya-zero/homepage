import ProjectCard from "@/components/ProjectCard";
import { Text, Box, Heading, HStack } from "@chakra-ui/react";

function Projects() {
  return (
    <>
      <Box margin="15px" marginTop="20px">
        <HStack flex={1}>
          <Heading variant="header">Projects</Heading>
        </HStack>
        <Text fontSize="md">List of projects that I am working on.</Text>
      </Box>

      <ProjectCard
        name="Enjo"
        reponame="enjo"
        desc="A project management tool that allows a user to easily manager their
                  projects. Enjo also can open editor/shell in selected project. Will
                  be suitable for users that use terminal frequently."
      />

      <ProjectCard
        name="Resup"
        reponame="resup"
        desc="A cross-platform terminal fronted for Real-ESRGAN NCNN image upscaler that is easy to
                    configure."
      />

      <ProjectCard
        name="Tesuto"
        reponame="tesuto"
        desc="Tesuto is a lightweight automation tool focused on speed and UX.
                    User can write a configuration file using an intuitive layout and
                    YAML syntax."
      />
    </>
  );
}

export default Projects;
