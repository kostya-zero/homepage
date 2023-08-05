import { Card, CardBody, HStack, Text, Box } from "@chakra-ui/react";

function SocialCard(props) {
    function go_to() {
        window.open(props.url, "_blank", 'noopener,noreferrer')
    }

    return (
        <>
            <Card marginTop="15px" size="sm" onClick={go_to} title={props.tooltip} transition="all .2s" cursor="pointer" 
                _hover={{
                    transform: "scale(1.03)",
                    boxShadow: "lg"
                }}>
                <CardBody>
                    <HStack flex={1}>
                        <Text fontWeight={700}>{props.social}</Text>
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
