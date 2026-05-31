import { PostMeta } from "@/lib/types/post.types";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";

function PostCard({ meta }: { meta: PostMeta }) {
    return (
        <li>
            <Link
                href={`/blog/${meta.slug}`}
                className="group flex flex-col overflow-hidden bg-background border border-border rounded-lg transition-all duration-300 select-none cursor-pointer hover:bg-background-highlight hover:border-border-highlight active:scale-[0.98]"
            >
                <div className="relative aspect-video overflow-hidden bg-background-highlight">
                    {meta.image ? (
                        <Image
                            src={meta.image}
                            alt={meta.imageAlt ?? meta.title}
                            fill
                            sizes="(min-width: 768px) 720px, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.16),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.10),transparent_45%)]" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </div>

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
