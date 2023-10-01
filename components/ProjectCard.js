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
      >
        <Image w="64px" h="64px" margin="5px" borderRadius="10px" src={props.image} />
        <Stack>
          <CardBody paddingTop="10px">
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
