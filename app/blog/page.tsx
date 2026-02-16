import Hero from "@/components/blocks/hero";
import MainContent from "@/components/blocks/maincontent";
import Text from "@/components/blocks/text";
import PostCard from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";

export const revalidate = 120;

export default function Blog() {
    const posts = getAllPosts();

    return (
        <MainContent>
            <Hero>Blog</Hero>
            <Text>
                This is a place of my thoughts. Here I am talking about my programming journey or other stuff. All of
                these posts are available in Markdown format on GitHub repository of this website.
            </Text>
            <ul className="gap-3 flex flex-col">
                {posts.map((p) => (
                    <PostCard key={p.slug} meta={p} />
                ))}
            </ul>
        </MainContent>
    );
}
