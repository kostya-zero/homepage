import Bold from "@/components/blocks/bold";
import { ContactLink } from "@/components/blocks/contactlink";
import Hero from "@/components/blocks/hero";
import MainContent from "@/components/blocks/maincontent";
import Text from "@/components/blocks/text";
import { Contact } from "@/lib/types/contact.types";
import { FaTelegram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

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

export default function Home() {
  return (
    <MainContent>
      <Hero>Welcome</Hero>
      <Text>
        I am <Bold>Konstantin Zhigaylo</Bold> or <Bold>Kostya</Bold> for short.
      </Text>
      <Text>
        I am a Rust developer, but I also use Next JS and TypeScript for
        front-end development (like this web page). My journey in programming
        began with C#, which I used to make GUIs for Windows using WinForms.
        Most of the projects are forbidden anyway.
      </Text>

      <Text>
        Feel free to reach out to me through any of the contacts below:
      </Text>
      <div className="flex flex-col gap-4 items-center mb-4 text-neutral-400">
        {contacts.map((contact) => (
          <ContactLink key={contact.id} contact={contact} icon={contact.icon} />
        ))}
      </div>
    </MainContent>
  );
}
