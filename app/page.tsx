import Bold from "@/components/blocks/bold";
import ContactLink from "@/components/blocks/contactlink";
import Hero from "@/components/blocks/hero";
import MainContent from "@/components/blocks/maincontent";
import Text from "@/components/blocks/text";
import { Contact } from "@/lib/types/contact.types";
import { Mail, SendHorizontal } from "lucide-react";

const contacts: Contact[] = [
    {
        id: "email",
        name: "Email",
        contact: "zero@kostyazero.com",
        icon: <Mail size={20} />,
        url: "mailto:zero@kostyazero.com",
    },
    {
        id: "telegram",
        name: "Telegram",
        contact: "@kostya_zero",
        icon: <SendHorizontal size={20} />,
        url: "https://t.me/kostya_zero",
    },
];

export const dynamic = "force-static";

export default function Home() {
    return (
        <MainContent>
            <Hero>Welcome</Hero>
            <Text>
                Hey, I’m <Bold>Konstantin Zhigaylo</Bold>, but you can just call me <Bold>Kostya</Bold>.
            </Text>
            <Text>
                I’m a <Bold>systems programmer</Bold> who enjoys building software. Most of my work revolves around{" "}
                <Bold>Rust</Bold>, where I focus on creating efficient CLI tools and backend systems. Occasionally, I
                dive into <Bold>Next.js</Bold> and <Bold>React</Bold> to build small web projects like this one (though
                my heart stays closer to the terminal).
            </Text>
            <Text>
                Lately, I’ve been exploring <Bold>network programming in Rust</Bold> and picking up <Bold>Go</Bold> as
                my second language, mainly because I was really interested about it.
            </Text>
            <Text>If you’d like to connect, collaborate, or just say hi, you can find me through the links below:</Text>
            <div className="flex flex-col gap-4 items-center mb-4 text-foreground">
                {contacts.map((contact) => (
                    <ContactLink key={contact.id} contact={contact} icon={contact.icon} />
                ))}
            </div>
        </MainContent>
    );
}
