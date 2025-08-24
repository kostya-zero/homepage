import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";

export type Project = {
    id: string;
    name: string;
    description: string;
    url: string;
    lang: string;
};

const langToClass: Record<string, string> = {
    rust: "bg-language-rust",
    go: "bg-language-go",
    powershell: "bg-language-pwsh",
    lua: "bg-language-lua",
};

export default async function ProjectCard({ project }: { project: Project }) {
    const res = await fetch(`https://api.github.com/repos/kostya-zero/${project.id}`, {
        next: { revalidate: 3600 },
        cache: "force-cache",
    });
    const repo = await res.json();

    const stars = repo?.stargazers_count ?? 0;
    const updated = new Date(repo?.updated_at ?? Date.now());
    const languageColor = langToClass[project.lang.toLowerCase()] ?? "bg-language-unknown";

    return (
        <Link
            href={project.url}
            className="w-full flex flex-col p-4 gap-2 bg-background border border-border  rounded-lg cursor-pointer transition duration-200 hover:border-neutral-500 hover:bg-neutral-800"
        >
            <div className="flex flex-row justify-between items-center w-full">
                <p className="text-lg text-white font-bold font-funnel">{project.name}</p>
                <div className="flex flex-row gap-2 text-white items-center">
                    <FaStar />
                    {stars ? stars : "0"}
                </div>
            </div>
            <p className={"text-md"}>{project.description}</p>
            <div className="flex flex-row items-center text-neutral-500 justify-between text-xs">
                <p>
                    Updated{" "}
                    {formatDistanceToNow(new Date(updated), {
                        addSuffix: true,
                    })}
                </p>
                <div className="flex flex-row items-center gap-2">
                    <div className={cn("size-2.5 rounded-full border-[1px] border-neutral-700", languageColor)}></div>
                    <p>{project.lang}</p>
                </div>
            </div>
        </Link>
    );
}
