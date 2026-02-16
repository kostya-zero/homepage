import { PostMeta } from "@/lib/types/post.types";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import Link from "next/link";

function PostCard({ meta }: { meta: PostMeta }) {
    return (
        <li>
            <Link
                href={`/blog/${meta.slug}`}
                className="flex flex-col gap-2 bg-background border border-border hover:bg-background-highlight hover:border-border-highlight duration-200 transition-colors select-none cursor-pointer p-4 rounded-lg"
            >
                <p className="text-lg text-custom-white font-bold font-funnel">{meta.title}</p>
                <p className="text-md text-foreground-desc">{meta.description}</p>

                <p className="text-foreground-muted text-xs">
                    Posted on {format(meta.date, "d MMMM yyyy", { locale: enUS })}
                </p>
            </Link>
        </li>
    );
}
export default PostCard;
