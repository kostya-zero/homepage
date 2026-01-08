import Hero from "@/components/blocks/hero";
import MainContent from "@/components/blocks/maincontent";
import Text from "@/components/blocks/text";

export const dynamic = "force-static";

export default function Blog() {
    const test = "Hello world";
    return (
        <MainContent>
            <Hero>Blog</Hero>
            <Text>This section is still under construction.</Text>
        </MainContent>
    );
}
