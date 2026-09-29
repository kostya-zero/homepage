import Hero from "@/components/blocks/hero";
import MainContent from "@/components/blocks/maincontent";
import Text from "@/components/blocks/text";
import { getAllPosts } from "@/lib/posts";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 120;
export const metadata: Metadata = {
    title: "Blog",
    description: "A blog page.",
};

export default function Blog() {
    const posts = getAllPosts();

    return (
        <MainContent>
            <Hero>Blog</Hero>
            <Text>
                This is a place of my thoughts. Here I am talking about my programming journey or other stuff. All of
                these posts are available in Markdown format on GitHub repository of this website.
            </Text>
            <ul className="flex flex-col">
                {posts.map((p) => (
                    <li key={p.slug}>
                        <Link
                            href={`/blog/${p.slug}`}
                            className="group flex items-baseline gap-4 py-2 text-sm"
                        >
                            <time dateTime={p.date} className="w-28 shrink-0 tabular-nums text-foreground-muted">
                                {format(p.date, "MMM d, yyyy", { locale: enUS })}
                            </time>
                            <span className="grow text-base text-foreground-bold underline-offset-4 group-hover:underline">
                                {p.title}
                            </span>
                            <span className="hidden shrink-0 text-foreground-muted sm:inline">{p.readingTime}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainContent>
    );
}
