import { PostMeta } from "@/lib/types/post.types";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import Link from "next/link";

function PostCard({ meta }: { meta: PostMeta }) {
    return (
        <li>
            <Link
                href={`/blog/${meta.slug}`}
                className="group flex flex-col overflow-hidden bg-background border border-border rounded-lg transition-all duration-300 select-none cursor-pointer hover:bg-background-highlight hover:border-border-highlight active:scale-[0.98]"
            >
                <div className="flex flex-col gap-2 p-4">
                    <p className="text-xl text-custom-white font-bold font-funnel leading-tight transition-colors group-hover:text-custom-white">
                        {meta.title}
                    </p>
                    <p className="text-sm text-foreground-desc leading-relaxed">{meta.description}</p>

                    <div className="flex items-center gap-2 text-foreground-muted text-xs font-medium">
                        <time dateTime={meta.date}>{format(meta.date, "MMMM d, yyyy", { locale: enUS })}</time>
                        {meta.readingTime && (
                            <>
                                <span className="size-1 rounded-full bg-foreground-muted" />
                                <span>{meta.readingTime}</span>
                            </>
                        )}
                    </div>
                </div>
            </Link>
        </li>
    );
}
export default PostCard;
