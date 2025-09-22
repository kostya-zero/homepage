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
                    I am <Bold>Konstantin Zhigaylo</Bold> or <Bold>Kostya</Bold> for short.
                </Text>
            </BlurOutAnimation>
            <BlurOutAnimation index={2}>
                <Text>
                    I am primarily a <Bold>Rust developer</Bold>, with experience in building front-end applications
                    using <Bold>Next.js</Bold> and <Bold>TypeScript</Bold>, as demonstrated by this website. My
                    programming journey started with <Bold>C#</Bold> and creating Windows GUIs using{" "}
                    <Bold>WinForms</Bold>. I am focused on building CLI applications using <Bold>Rust</Bold>.
                </Text>
            </BlurOutAnimation>
            <BlurOutAnimation index={3}>
                <Text>Feel free to reach out to me through any of the contacts below:</Text>
            </BlurOutAnimation>
            <BlurOutAnimation index={4}>
                <div className="flex flex-col gap-4 items-center mb-4 text-neutral-400">
                    {contacts.map((contact) => (
                        <ContactLink key={contact.id} contact={contact} icon={contact.icon} />
                    ))}
                </div>
            </BlurOutAnimation>
        </MainContent>
    );
}
