import path from "node:path";
import fs from "node:fs";
import matter from "gray-matter";
import { PostMeta } from "./types/post.types";

const POSTS_DIR = path.join(process.cwd(), "posts");
const SAFE_SLUG = /^[a-z0-9-]+$/i;

function assertSafeSlug(slug: string) {
    if (!SAFE_SLUG.test(slug)) {
        throw new Error("Invalid slug characters");
    }

    const resolved = path.resolve(POSTS_DIR, `${slug}.mdx`);
    const relative = path.relative(POSTS_DIR, resolved);

    // Prevent traversal: the resolved path must stay within POSTS_DIR
    if (relative.startsWith("..") || path.isAbsolute(relative)) {
        throw new Error("Slug resolves outside posts directory");
    }

    return resolved;
}

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
    const safePath = assertSafeSlug(slug);
    const raw = fs.readFileSync(safePath, "utf8");
    const { data, content } = matter(raw);
    return { meta: { slug, ...data } as PostMeta, content };
}

export { getAllPosts, getPostBySlug };
