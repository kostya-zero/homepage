import {
  Card,
  CardBody,
  Text,
  Img,
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
        variant="def-card"
        direction="row"
        onClick={() => {
          show_project();
        }}
      padding="0"
      margin="0"
      >
        <Img margin="15px" marginLeft="12px" w="56px" h="56px" marginRight="0" borderRadius="5px" src={props.image} />
        <Stack>
          <CardBody padding="15px">
            <Text  fontWeight="bold" fontSize="xl">
              {props.name}
            </Text>
            <Text> {props.desc}</Text>
          </CardBody>
        </Stack>
      </Card>
    </>
  );
}
