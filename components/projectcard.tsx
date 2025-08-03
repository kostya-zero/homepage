"use client";

import { Project } from "@/app/projects/page";
import { Octokit } from "@octokit/rest";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

export default function ProjectCard({ project }: { project: Project }) {
    const [stars, setStars] = useState<number>(0);
    const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

    useEffect(() => {
        const octokit = new Octokit();
        octokit.repos
            .get({
                owner: "kostya-zero",
                repo: project.id,
            })
            .then((response) => {
                setStars(response.data.stargazers_count);
                setLastUpdated(new Date(response.data.updated_at));
            });
    }, []);

    return (
        <figure className="w-full flex flex-col p-4 gap-2 bg-neutral-900 border border-neutral-800  rounded-lg cursor-pointer transition duration-200 hover:border-neutral-500 hover:bg-neutral-800">
            <div className="flex flex-row justify-between items-center w-full">
                <p className="text-lg text-white font-bold font-funnel">{project.name}</p>
                <div className="flex flex-row gap-2 text-neutral-50 items-center">
                    <FaStar />
                    {stars ? stars : "0"}
                </div>
            </div>
            <p className={"text-md"}>{project.description}</p>
            <p className={"text-neutral-600 text-xs"}>
                Updated{" "}
                {formatDistanceToNow(new Date(lastUpdated), {
                    addSuffix: true,
                })}
            </p>
        </figure>
    );
}
