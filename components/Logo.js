import { Text, HStack } from "@chakra-ui/react";
import { FaCoffee } from "react-icons/fa";
import { useRouter } from "next/router";

function Logo() {
    const navigate = useRouter()
    
    function brew_coffee() {
        navigate.push("/coffee");
    }

    return(
        <>
            <HStack>
                <Text fontSize='xl' fontWeight={700}>  Konstantin Zero</Text>
                <FaCoffee fontSize='xl' onClick={brew_coffee} title="relax, and do what you like"/>
            </HStack>
        </>
    )
}

export default Logo;
