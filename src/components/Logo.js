import { Text, HStack } from "@chakra-ui/react";
import { FaCoffee } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Logo() {
    const navigate = useNavigate();
    
    function brew_coffee() {
        navigate("/coffee");
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
