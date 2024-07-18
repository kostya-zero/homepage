import ProjectCard from "@/components/projectcard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Konstatin Zero",
  description: "List of projects that I am working on.",
};

export default function Projects() {
    return (
        <>
            <div className="m-[16px]">
                <h2 className="text-4xl font-bold font-worksans leading-[1.2]">Projects</h2>
                <p className="text-neutral-700 dark:text-neutral-300">List of projects that I am working on.</p>
            </div>
            <ProjectCard name="Enjo" reponame="enjo" desc="A project management tool that allows a user to easily manager their
                  projects. Enjo also can open editor/shell in selected project. Will
                  be suitable for users that use terminal frequently." />
            <ProjectCard name="Resup" reponame="resup" desc="A cross-platform terminal fronted for Real-ESRGAN NCNN image upscaler that is easy to
                    configure." />
            <ProjectCard name="Tesuto" reponame="tesuto" desc="Tesuto is a lightweight automation tool focused on speed and UX.
                    User can write a configuration file using an intuitive layout and
                    YAML syntax." />
        </>
    );
}