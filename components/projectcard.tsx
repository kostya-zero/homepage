import { Project } from "@/lib/types/project.types";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { Star } from "lucide-react";
import Link from "next/link";

const langToClass: Record<string, string> = {
    rust: "bg-language-rust",
    go: "bg-language-go",
    powershell: "bg-language-pwsh",
    lua: "bg-language-lua",
};

async function ProjectCard({ project }: { project: Project }) {
    const res = await fetch(`https://api.github.com/repos/kostya-zero/${project.id}`, {
        next: { revalidate: 3600 },
        cache: "force-cache",
    });
    const repo = await res.json();

    const stars = repo?.stargazers_count ?? 0;
    const updated = new Date(repo?.updated_at ?? null);
    const languageColor = langToClass[project.lang.toLowerCase()] ?? "bg-language-unknown";

    return (
        <Link
            href={project.url}
            className="w-full flex flex-col px-6 py-4 gap-1 transition-colors hover:bg-background-highlight/50"
        >
            <div className="flex flex-row justify-between items-center w-full">
                <p className="text-custom-white font-semibold font-funnel">{project.name}</p>
                <div className="flex flex-row gap-1.5 text-sm text-foreground-muted items-center">
                    <Star size={14} />
                    {stars ? stars : "?"}
                </div>
            </div>
            <p className="text-sm text-foreground-desc">{project.description}</p>
            <div className="flex flex-row items-center gap-4 mt-1 font-mono text-xs text-foreground-muted">
                <div className="flex flex-row items-center gap-2">
                    <div className={cn("size-2.5 rounded-full border border-neutral-700", languageColor)}></div>
                    <p>{project.lang}</p>
                </div>
                <p>
                    Updated{" "}
                    {formatDistanceToNow(new Date(updated), {
                        addSuffix: true,
                    })}
                </p>
            </div>
        </Link>
    );
}

export { ProjectCard, type Project };
