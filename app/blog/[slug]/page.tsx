import Hero from "@/components/blocks/hero";
import MainContent from "@/components/blocks/maincontent";
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
        <MainContent>
            <div className="flex flex-col gap-2 mt-4">
                <Link
                    href="/blog"
                    className="flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors w-fit"
                >
                    <FaChevronLeft size={12} />
                    Back to Blog
                </Link>

                <div className="flex flex-col gap-2 my-2">
                    <Hero className="text-4xl md:text-5xl">{meta.title}</Hero>
                    <p className="text-md text-foreground-desc leading-relaxed mt-1">{meta.description}</p>
                    <div className="flex items-center gap-3 text-sm text-foreground-muted">
                        <span>{format(meta.date, "MMMM d, yyyy", { locale: enUS })}</span>
                        <span>•</span>
                        <span>{meta.readingTime}</span>
                    </div>
                </div>
            </div>
            <div className="bg-border h-px w-full my-4"></div>
            <article>
                <MDXRemote source={content} components={components} />
            </article>
        </MainContent>
    );
}

export default PostViewPage;
