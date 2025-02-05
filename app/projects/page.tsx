"use client";

import { Hero } from "@/components/blocks/hero";
import { JSX } from "react";
import { Octokit } from "@octokit/rest";
import { FaRadiation, FaStar, FaToolbox } from "react-icons/fa6";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { IoPlayForward } from "react-icons/io5";
import { formatDistanceToNow } from "date-fns";

// export const revalidate = 100;

const github = new Octokit({});

interface Project {
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

export default function Blog() {
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

async function ProjectCard({ project }: { project: Project }) {
  const repo = await github.repos
    .get({
      owner: "kostya-zero",
      repo: project.id,
    })
    .then((res) => res)
    .catch(() => null);

  // if (repo === null) {
  //   return (
  //     <figure className="w-full flex flex-col p-4 gap-2 bg-neutral-950 border border-neutral-800 rounded-lg ">
  //       <p>Failed to fetch project {project.name}</p>
  //     </figure>
  //   );
  // }

  const stars = repo?.data.stargazers_count || null;

  return (
    <figure className="w-full flex flex-col p-4 gap-2 bg-neutral-950 border border-neutral-800 rounded-lg cursor-pointer transition duration-200 hover:border-neutral-700 hover:bg-neutral-900">
      <div className="flex flex-row justify-between items-center w-full">
        <p className="text-lg text-white font-bold font-funnel">
          {project.name}
        </p>
        <div className="flex flex-row gap-2 text-neutral-50 items-center">
          <FaStar />
          {stars ? stars : "Unknown"}
        </div>
      </div>
      <p>{project.description}</p>
      <div className="flex flex-row justify-between items-center w-full text-neutral-600">
        <p>
          Updated{" "}
          {repo
            ? formatDistanceToNow(new Date(repo?.data.updated_at), {
                addSuffix: true,
              })
            : "recently"}
        </p>
        <p>Written in {repo?.data.language}</p>
      </div>
    </figure>
  );
}
