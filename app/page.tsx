import { Hero } from "@/components/blocks/hero";
import { SectionTitle } from "@/components/blocks/sectiontitle";
import { Metadata } from "next";
import Link from "next/link";
import { FC, type JSX } from "react";
import { FaGithub, FaTelegram } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

interface Contact {
  id: string;
  name: string;
  contact: string;
  icon: JSX.Element;
  url: string;
  wip?: boolean;
}

const contacts: Contact[] = [
  {
    id: "email",
    name: "Email",
    contact: "zero@kostyazero.com",
    icon: <MdEmail className="w-6 h-6" />,
    url: "mailto:zero@kostyazero.com",
  },
  {
    id: "github",
    name: "GitHub",
    contact: "kostya-zero",
    icon: <FaGithub className="w-6 h-6" />,
    url: "https://github.com/kostya-zero",
  },
  {
    id: "telegram",
    name: "Telegram",
    contact: "@kostya_zero",
    icon: <FaTelegram className="w-6 h-6" />,
    url: "https://t.me/kostya_zero",
  },
];

const Bio: FC = () => (
  <div className="flex flex-col gap-4 font-inter">
    <p className="text-neutral-300">
      I am <b className="font-semibold">Konstantin Zhigaylo</b> or{" "}
      <b className="font-semibold">Kostya</b> for short.
    </p>
    <p className="text-neutral-300">
      I am a Rust developer, but I also use Next JS and TypeScript for front-end
      development (like this web page). My journey in programming began with C#,
      which I used to make GUIs for Windows using WinForms. Most of the projects
      are forbidden anyway.
    </p>
  </div>
);

interface ContactLinkProps {
  contact: Contact;
  icon: JSX.Element;
}

const ContactLink: FC<ContactLinkProps> = ({ contact, icon }) => {
  return (
    <Link
      href={contact.url}
      className="flex flex-row group justify-between items-center w-full cursor-pointer transition duration-200 hover:text-neutral-50 px-1"
    >
      <div className="flex flex-row gap-2">
        {icon}
        <p>{contact.name}</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className=" text-neutral-700 group-hover:text-neutral-500 duration-200 transition">
          {contact.contact}
        </p>
        <FiArrowUpRight className="w-6 h-6" />
      </div>
    </Link>
  );
};

export const metadata: Metadata = {
  title: "Konstatin Zero",
  description: "My own homepage website.",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-4 mx-4">
      <Hero>Welcome</Hero>
      <Bio />

      <div className="">
        <SectionTitle>Contacts</SectionTitle>
        <div className="flex flex-col gap-4 items-center mb-4 text-neutral-400">
          {contacts.map((contact) => (
            <ContactLink
              key={contact.id}
              contact={contact}
              icon={contact.icon}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
