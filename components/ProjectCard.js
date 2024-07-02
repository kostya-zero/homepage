import {
  Text,
  Heading,
  HStack,
  Card,
  CardBody,
  Spacer,
  CardFooter,
  CardHeader,
  Link,
} from "@chakra-ui/react";
import { Octokit } from "@octokit/core";
import { useRef, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import { en } from "date-fns/locale";

export default function ProjectCard(props) {
  const [stars, setStars] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const repo_link = "https://github.com/kostya-zero/" + props.reponame;

  useEffect(() => {
    const fetchRepoInfo = async () => {
      const gh = new Octokit();

      try {
        const { data: repoinfo } = await gh.request(
          "GET /repos/{owner}/{repo}",
          {
            owner: "kostya-zero",
            repo: props.reponame,
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          },
        );

        setStars(repoinfo.stargazers_count);
        setLastUpdated(new Date(repoinfo.updated_at));
      } catch (error) {
        console.error("Error fetching repo info:", error);
      }
    };

    fetchRepoInfo();
  }, [props.reponame]);

  return (
    <>
      <Card
        variant="def"
        margin="15px"
        cursor="pointer"
        href={repo_link}
        as={Link}
      >
        <CardBody>
          <HStack>
            <Heading variant="section">{props.name}</Heading>
            <Spacer />
            <Text>
              Updated{" "}
              {formatDistanceToNow(lastUpdated, {
                addSuffix: true,
                locale: en,
              })}
            </Text>
            <FaStar />
            <Text>{stars}</Text>
          </HStack>
          <Text>{props.desc}</Text>
        </CardBody>
      </Card>
    </>
  );
}
