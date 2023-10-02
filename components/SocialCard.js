import { Card, CardBody, HStack, Text, Box, useColorModeValue } from "@chakra-ui/react";

function SocialCard(props) {
    function go_to() {
        window.open(props.url, "_blank", 'noopener,noreferrer')
    }

    return (
        <>
            <Card marginTop="15px" size="sm" variant="outline" onClick={go_to} title={props.tooltip} transition="all .3s" cursor="pointer" 
                _hover={{
                    transform: "scale(1.03)",
                    boxShadow: "lg",
                }}

                _active={{
                    transform: "scale(0.99)"
                }}>
                <CardBody>
                    <HStack flex={1}>
                        <Text fontWeight={700} fontSize={`sm`}>{props.social}</Text>
                        <Box flex={1} align="right">
                            {props.icon}
                        </Box>
                    </HStack>
                </CardBody>
            </Card>
        </>
    );
}

export default SocialCard;
