import { Card, CardBody, HStack, Text, Box, useColorModeValue, Link } from "@chakra-ui/react";

function SocialCard(props) {
    return (
        <>
            <Card
                marginTop="15px"
                size="sm"
                variant="def"
                title={props.tooltip}
                cursor="pointer"
                as={Link}
                isExternal
                href={props.url}>
                <CardBody>
                    <HStack flex={1}>
                        <Text fontWeight={700} fontSize={`sm`}>{props.social_name} </Text>
                        <Text fontSize={`sm`}>{props.social_detail}</Text>
                        <Box flex={1} align="right" color={useColorModeValue("#191919", "#FFFFFF")}>
                            {props.icon}
                        </Box>
                    </HStack>
                </CardBody>
            </Card>
        </>
    );
}

export default SocialCard;
