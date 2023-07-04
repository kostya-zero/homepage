import { Text, HStack } from "@chakra-ui/react";
import { FaCoffee } from "react-icons/fa";

function Logo() 
{
    return(
        <>
            <HStack>
                <Text fontSize='xl' fontWeight={700}>  Konstantin Zero</Text>
                <FaCoffee fontSize='xl' title="relax, and do what you like"/>
            </HStack>
        </>
    )
}

export default Logo;
