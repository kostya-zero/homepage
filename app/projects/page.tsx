import Hero from "@/components/blocks/hero";
import { type Project, ProjectCard } from "@/components/projectcard";
import { Metadata } from "next";
import Text from "@/components/blocks/text";
import MainContent from "@/components/blocks/maincontent";

export const metadata: Metadata = {
    title: "Projects",
    description: "List of my projects.",
};

const projects: Project[] = [
    {
        id: "kanri",
        name: "Kanri",
        description: "Manage your projects within the terminal.",
        url: "https://github.com/kostya-zero/kanri",
        lang: "Rust",
    },
    {
        id: "lime",
        name: "Lime",
        description: "A lightweight HTML server for a fast website's deployment.",
        url: "https://github.com/kostya-zero/lime",
        lang: "Rust",
    },
    {
        id: "velocity",
        name: "Velocity",
        description: "A pure PowerShell prompt.",
        url: "https://github.com/kostya-zero/velocity",
        lang: "PowerShell",
    },
    {
        id: "AnomalyLauncher",
        name: "AnomalyLauncher",
        description: "Launcher for Stalker Anomaly.",
        url: "https://github.com/kostya-zero/AnomalyLauncher",
        lang: "Rust",
    },
    {
        id: "vizo",
        name: "Vizo",
        description: "Visualizer for structured data formats.",
        url: "https://github.com/kostya-zero/vizo",
        lang: "Rust",
    },
];

export const dynamic = "force-dynamic";
export const revalidate = 3600;

export default async function Projects() {
    return (
        <MainContent>
            <Hero>Projects</Hero>
            <Text>
                This is a list of my projects that I am currently working on. You can click on a project&apos;s card to
                go to its GitHub repository.
            </Text>

            <div className="flex-col gap-4 flex items-center mb-4 text-neutral-400 w-full">
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </MainContent>
    );
}
