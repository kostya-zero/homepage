import Hero from "@/components/blocks/hero";
import Section from "@/components/blocks/section";
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
        <>
            <Section>
                <Hero>Blog</Hero>
                <Text>
                    This is a place of my thoughts. Here I am talking about my programming journey or other stuff. All
                    of these posts are available in Markdown format on GitHub repository of this website.
                </Text>
            </Section>
            <Section label="Posts" className="pb-0 pt-4">
                <ul className="-mx-6 flex flex-col divide-y border-t">
                    {posts.map((p) => (
                        <li key={p.slug}>
                            <Link
                                href={`/blog/${p.slug}`}
                                className="flex items-baseline gap-4 px-6 py-3 transition-colors hover:bg-background-highlight/50"
                            >
                                <time
                                    dateTime={p.date}
                                    className="w-24 shrink-0 font-mono text-xs tabular-nums text-foreground-muted"
                                >
                                    {format(p.date, "MMM d, yyyy", { locale: enUS })}
                                </time>
                                <span className="grow text-foreground-bold">{p.title}</span>
                                <span className="hidden shrink-0 font-mono text-xs text-foreground-muted sm:inline">
                                    {p.readingTime}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Section>
        </>
    );
}
