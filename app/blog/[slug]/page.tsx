import Hero from "@/components/blocks/hero";
import MainContent from "@/components/blocks/maincontent";
import Text from "@/components/blocks/text";
import { components } from "@/components/mdx-components";
import { getPostBySlug } from "@/lib/posts";
import { PostMeta } from "@/lib/types/post.types";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { use } from "react";

export const revalidate = 120;

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
            <div className="flex flex-col gap-1">
                <Hero>{meta.title}</Hero>
                <Text>{meta.description}</Text>
                <p className="text-sm text-neutral-500">{format(meta.date, "d MMMM yyyy", { locale: enUS })}</p>
            </div>
            <div className="bg-neutral-700 h-px w-full"></div>
            <MDXRemote source={content} components={components} />
        </MainContent>
    );
}

export default PostViewPage;
