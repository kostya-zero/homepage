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
        id: "route",
        name: "Route",
        description: "Route is a lightweight API-first URL shortener with powerful CLI.",
        url: "https://github.com/kostya-zero/route",
        lang: "Go",
    },
    {
        id: "qry",
        name: "QRY",
        description: "A CLI query runner with support for multiple databases with SQL-like syntax.",
        url: "https://github.com/kostya-zero/qry",
        lang: "Go",
    },
    {
        id: "dock",
        name: "dock",
        description: "A lightweight and fast FTP server.",
        url: "https://github.com/kostya-zero/dock",
        lang: "Rust",
    },
    {
        id: "relayx",
        name: "Relayx",
        description: "A TCP client with shell-like interface",
        url: "https://github.com/kostya-zero/relayx",
        lang: "Rust",
    },
    {
        id: "AnomalyLauncher",
        name: "AnomalyLauncher",
        description: "Launcher for Stalker Anomaly.",
        url: "https://github.com/kostya-zero/AnomalyLauncher",
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

            <div className="flex-col gap-4 flex items-center mb-4 text-neutral-400 w-full grid grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </MainContent>
    );
}
