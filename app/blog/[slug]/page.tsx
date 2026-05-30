import Hero from "@/components/blocks/hero";
import MainContent from "@/components/blocks/maincontent";
import { components } from "@/components/mdx-components";
import { getPostBySlug } from "@/lib/posts";
import { PostMeta } from "@/lib/types/post.types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import Image from "next/image";

export const revalidate = 120;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const slug = (await params).slug;
    let meta: PostMeta;

    try {
        const post = getPostBySlug(slug);
        meta = post.meta;
    } catch {
        return {
            title: "Post not found",
            description: "Cannot found the post that you are looking for.",
        };
    }

    return {
        title: meta.title,
        description: meta.description,
    };
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
            <div className="flex flex-col gap-6 mt-4">
                <Link
                    href="/blog"
                    className="flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors w-fit"
                >
                    <FaChevronLeft size={12} />
                    Back to Blog
                </Link>

                <div className="flex flex-col gap-2 items-center my-2">
                    <Hero className="text-4xl md:text-5xl !mt-0">{meta.title}</Hero>
                    <p className="text-lg text-foreground-desc leading-relaxed mt-1">{meta.description}</p>
                    <div className="flex items-center gap-3 text-sm text-foreground-muted">
                        <span>{format(meta.date, "MMMM d, yyyy", { locale: enUS })}</span>
                        <span>•</span>
                        <span>{meta.readingTime}</span>
                    </div>
                    {meta.image && (
                        <Image
                            src={meta.image!}
                            alt={meta.imageAlt!}
                            width={2000}
                            height={1000}
                            className="rounded-lg mt-5"
                        />
                    )}
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
