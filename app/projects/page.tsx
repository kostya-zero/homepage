import Hero from "@/components/blocks/hero";
import ProjectCard, { Project } from "@/components/projectcard";
import { Metadata } from "next";
import Text from "@/components/blocks/text";
import MainContent from "@/components/blocks/maincontent";
import BlurOutAnimation from "@/components/bluroutanimation";

export const metadata: Metadata = {
    title: "Projects",
    description: "List of my projects.",
};

const projects: Project[] = [
    {
        id: "enjo",
        name: "Enjo",
        description: "Yet another manager for your projects",
        url: "https://github.com/kostya-zero/enjo",
        lang: "Rust",
    },
    {
        id: "vizo",
        name: "Vizo",
        description: "Visualizer for structured data formats.",
        url: "https://github.com/kostya-zero/vizo",
        lang: "Rust",
    },
    {
        id: "kvdb",
        name: "KVDB",
        description: "Lightweight key‑value store written in Go.",
        url: "https://github.com/kostya-zero/kvdb",
        lang: "Go",
    },
    {
        id: "fugitive-aliases",
        name: "fugitive-aliases.nvim",
        description: "A collection of preconfigured aliases for vim-fugitive plugin.",
        url: "https://github.com/kostya-zero/fugitive-aliases.nvim",
        lang: "Lua",
    },
    {
        id: "velocity",
        name: "Velocity",
        description: "A pure PowerShell prompt. ",
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
];

export default async function Projects() {
    return (
        <MainContent>
            <BlurOutAnimation>
                <Hero>Projects</Hero>
            </BlurOutAnimation>
            <BlurOutAnimation index={1}>
                <Text>
                    This is a list of my projects that I am currently working on. You can click on a project&apos;s card
                    to go to its GitHub repository.
                </Text>
            </BlurOutAnimation>

            <div className="flex-col gap-4 flex items-center mb-4 text-neutral-400 w-full">
                {projects.map((project, index) => (
                    <BlurOutAnimation index={index + 2} className="w-full" key={project.id}>
                        <ProjectCard project={project} key={project.id} />
                    </BlurOutAnimation>
                ))}
            </div>
        </MainContent>
    );
}
