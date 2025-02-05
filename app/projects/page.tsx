import { Hero } from "@/components/blocks/hero";
import { JSX } from "react";
import { FaRadiation, FaToolbox } from "react-icons/fa6";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { IoPlayForward } from "react-icons/io5";
import ProjectCard from "@/components/projectcard";

// export const revalidate = 100;

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
    <main className="flex flex-col gap-4 mx-4">
      <Hero>Projects</Hero>
      <p className="text-neutral-300 ">
        This is my projects that I am working with right now. You can click on a
        project&apos;s card to go to it&apos;s GitHub page.{" "}
      </p>
      <div className="flex flex-col gap-4 items-center mb-4 text-neutral-400 w-full">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </main>
  );
}

