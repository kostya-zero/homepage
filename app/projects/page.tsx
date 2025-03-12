import Hero from "@/components/blocks/hero";
import { JSX } from "react";
import { FaRadiation, FaToolbox } from "react-icons/fa6";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { IoPlayForward } from "react-icons/io5";
import ProjectCard from "@/components/projectcard";
import { Metadata } from "next";
import Text from "@/components/blocks/text";
import MainContent from "@/components/blocks/maincontent";

export const metadata: Metadata = {
  title: "Projects",
  description: "List of my projects.",
};

export interface Project {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  url: string;
}

const projects: Project[] = [
  {
    id: "enjo",
    name: "Enjo",
    description: "Yet another projects manager.",
    icon: <HiMiniRectangleStack className="h-full w-10 mb-4 text-neutral-50" />,
    url: "https://github.com/kostya-zero/enjo",
  },
  {
    id: "tesuto",
    name: "Tesuto",
    description: "Lightweight automation tool.",
    icon: <IoPlayForward className="h-full w-10 mb-4 text-neutral-50" />,
    url: "https://github.com/kostya-zero/tesuto",
  },
  {
    id: "pipe",
    name: "Pipe",
    description: "A build system for Python",
    icon: <FaToolbox className="h-full w-10 mb-4 text-neutral-50" />,
    url: "https://github.com/kostya-zero/pipe",
  },
  {
    id: "AnomalyLauncher",
    name: "AnomalyLauncher",
    description: "Launcher for Stalker Anomaly.",
    icon: <FaRadiation className="h-full w-10 mb-4 text-neutral-50" />,
    url: "https://github.com/kostya-zero/AnomalyLauncher",
  },
];

export default async function Projects() {
  return (
    <MainContent>
      <Hero>Projects</Hero>
      <Text>
        This is a list of my projects that I am currently working on. You can click on a
        project&apos;s card to go to its GitHub page.{" "}
      </Text>
      <div className="flex flex-col gap-4 items-center mb-4 text-neutral-400 w-full">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </MainContent>
  );
}
