import Bold from "@/components/blocks/bold";
import { ContactLink } from "@/components/blocks/contactlink";
import Hero from "@/components/blocks/hero";
import MainContent from "@/components/blocks/maincontent";
import Text from "@/components/blocks/text";
import { Contact } from "@/lib/types/contact.types";
import { FaTelegram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import BlurOutAnimation from "@/components/bluroutanimation";

const contacts: Contact[] = [
    {
        id: "email",
        name: "Email",
        contact: "zero@kostyazero.com",
        icon: <MdEmail className="w-6 h-6" />,
        url: "mailto:zero@kostyazero.com",
    },
    {
        id: "telegram",
        name: "Telegram",
        contact: "@kostya_zero",
        icon: <FaTelegram className="w-6 h-6" />,
        url: "https://t.me/kostya_zero",
    },
];

export const dynamic = "force-static";

export default function Home() {
    return (
        <MainContent>
            <BlurOutAnimation>
                <Hero>Welcome</Hero>
            </BlurOutAnimation>
            <BlurOutAnimation index={1}>
                <Text>
                    Hey, I’m <Bold>Konstantin Zhigaylo</Bold>, but you can just call me <Bold>Kostya</Bold>.
                </Text>
            </BlurOutAnimation>
            <BlurOutAnimation index={3}>
                <Text>
                    I’m a <Bold>systems-minded programmer</Bold> who enjoys building fast, minimal, and reliable
                    software. Most of my work revolves around <Bold>Rust</Bold>, where I focus on creating efficient CLI
                    tools and backend systems. Occasionally, I dive into <Bold>Next.js</Bold> and <Bold>React</Bold> to
                    build small web projects like this one (though my heart stays closer to the terminal).
                </Text>
            </BlurOutAnimation>
            <BlurOutAnimation index={3}>
                <Text>
                    I’m a <Bold>systems programmer</Bold> who enjoys building software. Most of my work revolves around{" "}
                    <Bold>Rust</Bold>, where I focus on creating efficient CLI tools and backend systems. Occasionally,
                    I dive into <Bold>Next.js</Bold> and <Bold>React</Bold> to build small web projects like this one
                    (though my heart stays closer to the terminal).
                </Text>
            </BlurOutAnimation>
            <BlurOutAnimation index={4}>
                <Text>
                    Lately, I’ve been exploring <Bold>network programming in Rust</Bold> and picking up <Bold>C++</Bold>{" "}
                    as my second low-level language, mainly because I enjoy understanding what’s happening under the
                    hood.
                </Text>
            </BlurOutAnimation>
            <BlurOutAnimation index={5}>
                <Text>
                    If you’d like to connect, collaborate, or just say hi, you can find me through the links below:
                </Text>
            </BlurOutAnimation>
            <BlurOutAnimation index={6}>
                <div className="flex flex-col gap-4 items-center mb-4 text-neutral-400">
                    {contacts.map((contact) => (
                        <ContactLink key={contact.id} contact={contact} icon={contact.icon} />
                    ))}
                </div>
            </BlurOutAnimation>
        </MainContent>
    );
}
