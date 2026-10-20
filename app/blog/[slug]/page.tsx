import Hero from "@/components/blocks/hero";
import Section from "@/components/blocks/section";
import { components } from "@/components/mdx-components";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { PostMeta } from "@/lib/types/post.types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";

export const revalidate = 120;

export function generateStaticParams() {
    return getAllPosts().map(({ slug }) => ({ slug }));
}

const SITE_URL = "https://kostyazero.com";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    try {
        const { meta } = getPostBySlug(slug);
        const url = new URL(`/blog/${meta.slug}`, SITE_URL);

        return {
            title: meta.title,
            description: meta.description,
            alternates: {
                canonical: url,
            },
            openGraph: {
                title: meta.title,
                description: meta.description,
                url,
                siteName: "Konstantin Zero",
                type: "article",
                publishedTime: meta.date,
            },
            twitter: {
                card: "summary",
                title: meta.title,
                description: meta.description,
            },
        };
    } catch {
        return {
            title: "Post not found",
            description: "Cannot find the post that you are looking for.",
            robots: {
                index: false,
                follow: false,
            },
        };
    }
}

function PostViewPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    let content: string;
    let meta: PostMeta;

    try {
        const post = getPostBySlug(slug);
        content = post.content;
        meta = post.meta;
    } catch {
        notFound();
    }

    return (
        <>
            <Section>
                <Link
                    href="/blog"
                    className="flex items-center gap-2 w-fit font-mono text-xs uppercase tracking-wide text-foreground-muted hover:text-foreground transition-colors"
                >
                    <FaChevronLeft size={10} />
                    Back to Blog
                </Link>
                <Hero className="text-3xl sm:text-4xl">{meta.title}</Hero>
                <div className="flex items-center gap-3 font-mono text-xs text-foreground-muted">
                    <span>{format(meta.date, "MMMM d, yyyy", { locale: enUS })}</span>
                    <span>•</span>
                    <span>{meta.readingTime}</span>
                </div>
            </Section>
            <Section>
                <article className="prose max-w-none prose-headings:font-funnel prose-code:font-normal prose-code:bg-background-highlight prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none">
                    <MDXRemote source={content} components={components} />
                </article>
            </Section>
        </>
    );
}

export default PostViewPage;
