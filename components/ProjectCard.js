import {
  Card,
  CardFooter,
  HStack,
  Badge,
  CardBody,
  Text,
  Image,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function ProjectCard(props) {
  const navigate = useRouter();
  function show_project() {
    navigate.push("/projects/" + props.name);
  }

  return (
    <>
      <Card
        overflow="hidden"
        cursor="pointer"
        variant="outline"
        direction="row"
        onClick={() => {
          show_project();
        }}
        padding="10px"
        paddingBottom="0"
        paddingTop="0"
        transition="all .3s"
        _hover={{
          transform: "scale(1.03)",
          boxShadow: "lg",
        }}
      >
        <Image marginLeft="5px" marginTop="auto" marginBottom="auto" w="64px" h="64px" marginRight="0" borderRadius="10px" src={props.image} />
        <Stack>
          <CardBody>
            <Text fontWeight="bold" fontSize="xl">
              {props.name}
            </Text>
            <Text> {props.desc}</Text>
          </CardBody>
        </Stack>
      </Card>
    </>
  );
}
