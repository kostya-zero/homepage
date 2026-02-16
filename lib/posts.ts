import path from "node:path";
import fs from "node:fs";
import matter from "gray-matter";
import { PostMeta } from "./types/post.types";

const POSTS_DIR = path.join(process.cwd(), "posts");

function getAllPosts(): PostMeta[] {
    const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

    const posts = files.map((f) => {
        const slug = f.replace(/\.mdx$/, "");
        const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf8");
        const { data } = matter(raw);

        return {
            slug,
            title: String(data.title ?? slug),
            date: String(data.date ?? ""),
            description: String(data.description ?? ""),
        };
    });

    posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    return posts;
}

function getPostBySlug(slug: string) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), "utf8");
    const { data, content } = matter(raw);
    return { meta: { slug, ...data } as PostMeta, content };
}

export { getAllPosts, getPostBySlug };
