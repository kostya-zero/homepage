import { Hero } from "@/components/hero";
import { SectionTitle } from "@/components/sectiontitle";
import { Metadata } from "next";
import Link from "next/link";
import { FC } from "react";
import { FaGithub, FaTelegram } from "react-icons/fa6";
import { FiArrowUpRight, FiPackage } from "react-icons/fi";
import { IoPlayForward } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

interface Project {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  url: string;
}

interface Contact {
  id: string;
  name: string;
  icon: JSX.Element;
  url: string;
}

// Content Data
const projects: Project[] = [
  {
    id: "enjo",
    name: "Enjo",
    description: "Yet another projects manager.",
    icon: <FiPackage className="m-auto h-full text-2xl" />,
    url: "https://github.com/kostya-zero/enjo",
  },
  {
    id: "tesuto",
    name: "Tesuto",
    description: "Lightweight automation tool.",
    icon: <IoPlayForward className="m-auto h-full text-2xl" />,
    url: "https://github.com/kostya-zero/tesuto",
  },
];

const contacts: Contact[] = [
  {
    id: "email",
    name: "Email",
    icon: <MdEmail className="w-6 h-6" />,
    url: "mailto:zero@kostyazero.com",
  },
  {
    id: "github",
    name: "GitHub",
    icon: <FaGithub className="w-6 h-6" />,
    url: "https://github.com/kostya-zero",
  },
  {
    id: "telegram",
    name: "Telegram",
    icon: <FaTelegram className="w-6 h-6" />,
    url: "https://t.me/kostya_zero",
  },
];

const Bio: FC = () => (
  <div className="mx-[15px] my-[25px] flex flex-col gap-5">
    <p className="text-neutral-300">
      Hi there! I am <b>Konstantin Zhigaylo</b> or <b>Kostya</b> for short.
    </p>
    <p className="text-neutral-300">
      I am a Rust developer, but I also use Next JS and TypeScript for front-end
      development (like this web page). My journey in programming began with C#,
      which I used to make GUIs for Windows using WinForms. Most of the projects
      are forbidden anyway.
    </p>
    <p className="text-neutral-300">
      I like to create new designs and experiment with new technologies. I am
      always looking for new ways to improve my skills.
    </p>
  </div>
);

interface ProjectCardProps {
  project: Project;
  icon: JSX.Element;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, icon }) => {
  return (
    <Link href={project.url}>
      <div className="flex flex-row gap-6 items-center mb-4 transition duration-200 hover:bg-neutral-900 p-2 rounded-xl cursor-pointer">
        <div className="w-16 h-16 bg-neutral-800 text-neutral-50 rounded-full">
          {icon}
        </div>
        <div className="flex flex-col items-start">
          <p className="text-neutral-50 font-bold font-worksans text-lg">
            {project.name}
          </p>
          <p className="text-neutral-300">{project.description}</p>
        </div>
      </div>
    </Link>
  );
};

interface ContactLinkProps {
  contact: Contact;
  icon: JSX.Element;
}

const ContactLink: FC<ContactLinkProps> = ({ contact, icon }) => {
  return (
    <Link
      href={contact.url}
      className="flex flex-row justify-between items-center w-full cursor-pointer transition duration-200 hover:text-neutral-50 px-1"
    >
      <div className="flex flex-row gap-2">
        {icon}
        <p>{contact.name}</p>
      </div>
      <FiArrowUpRight className="w-6 h-6" />
    </Link>
  );
};

export const metadata: Metadata = {
  title: "Konstatin Zero",
  description: "My own homepage website.",
};

export default function Home() {
  return (
    <>
      <Hero>An indie developer and a system administrator</Hero>
      <Bio />

      <div className="mx-[15px] my-[25px]">
        <SectionTitle>Projects</SectionTitle>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} icon={project.icon} />
        ))}
      </div>

      <div className="mx-[15px] my-[25px]">
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
    </>
  );
}
