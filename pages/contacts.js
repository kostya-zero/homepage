import { Text, Box, Heading, HStack } from "@chakra-ui/react";
import { FaTelegram, FaMailBulk, FaDiscord } from "react-icons/fa";
import SocialCard from "@/components/SocialCard";

export default function Socials() {
  return (
    <>
      <Box margin="15px" marginTop="20px">
        <HStack flex={1}>
          <Heading variant="header">Contacts</Heading>
        </HStack>
        <Text>
          You can ask me a question or simply talk to me by the ways below.
        </Text>
      </Box>
      <Box margin="15px" marginTop="25px">
        <SocialCard
          url="mailto:zero@kostyazero.com"
          tooltip="My email address."
          social_name="Email"
          social_detail="zero@kostyazero.com"
          icon={<FaMailBulk />}
        />
        <SocialCard
          url="https://t.me/@kostya_zero"
          tooltip="https://t.me/@kostya_zero"
          social_name="Telegram"
          social_detail="@kostya_zero"
          icon={<FaTelegram />}
        />
        <SocialCard
          url="https://discord.com/users/414264955617935371"
          tooltip="https://discord.com/users/414264955617935371"
          social_name="Discord"
          social_detail="kostya_zero"
          icon={<FaDiscord />}
        />
      </Box>
    </>
  );
}
