import { PostMeta } from "@/lib/types/post.types";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import Link from "next/link";

function PostCard({ meta }: { meta: PostMeta }) {
    return (
        <li>
            <Link
                href={`/blog/${meta.slug}`}
                className="group flex flex-col gap-1 bg-background border border-border hover:bg-background-highlight hover:border-border-highlight duration-300 transition-all select-none cursor-pointer p-4 rounded-xl active:scale-[0.98]"
            >
                <div className="flex justify-between items-start gap-4">
                    <p className="text-xl text-custom-white font-bold font-funnel group-hover:text-white transition-colors">
                        {meta.title}
                    </p>
                </div>
                <p className="text-md text-foreground-desc ">{meta.description}</p>

                <div className="flex items-center gap-2 mt-2 justify-between">
                    <p className="text-foreground-muted text-xs font-medium">
                        {format(meta.date, "MMMM d, yyyy", { locale: enUS })}
                    </p>

                    {meta.readingTime && (
                        <span className="text-foreground-muted text-xs font-medium">{meta.readingTime}</span>
                    )}
                </div>
            </Link>
        </li>
    );
}
export default PostCard;
