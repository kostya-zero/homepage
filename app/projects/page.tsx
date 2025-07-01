import Hero from "@/components/blocks/hero";
import ProjectCard from "@/components/projectcard";
import { Metadata } from "next";
import Text from "@/components/blocks/text";
import MainContent from "@/components/blocks/maincontent";
import BlurOutAnimation from "@/components/bluroutanimation";

export const metadata: Metadata = {
  title: "Projects",
  description: "List of my projects.",
};

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    id: "enjo",
    name: "Enjo",
    description: "Yet another projects manager.",
    url: "https://github.com/kostya-zero/enjo",
  },
  {
    id: "viz",
    name: "Viz",
    description: "Visualize structured data formats in a more pretty way. ",
    url: "https://github.com/kostya-zero/viz",
  },
  {
    id: "velocity",
    name: "Velocity",
    description: "A pure PowerShell prompt. ",
    url: "https://github.com/kostya-zero/velocity",
  },
  {
    id: "AnomalyLauncher",
    name: "AnomalyLauncher",
    description: "Launcher for Stalker Anomaly.",
    url: "https://github.com/kostya-zero/AnomalyLauncher",
  },
];

export default async function Projects() {
  return (
    <MainContent>
      <BlurOutAnimation>
        <Hero>Projects</Hero>
      </BlurOutAnimation>
      <BlurOutAnimation index={1}>
        <Text>
          This is a list of my projects that I am currently working on. You can
          click on a project&apos;s card to go to its GitHub repository.
        </Text>
      </BlurOutAnimation>

      <div className="flex-col gap-4 grid grid-cols-1 lg:grid-cols-2 items-center mb-4 text-neutral-400 w-full">
        {projects.map((project, index) => (
          <BlurOutAnimation
            index={index + 2}
            className="w-full"
            key={project.id}
          >
            <ProjectCard project={project} key={project.id} />
          </BlurOutAnimation>
        ))}
      </div>
    </MainContent>
  );
}
