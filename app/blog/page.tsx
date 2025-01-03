import { Hero } from "@/components/blocks/hero";
import SectionWrapper from "@/components/blocks/sectionwrapper";
import Text from "@/components/blocks/text";

export default async function Blog() {
  return (
    <main className="text-neutral-50">
      <Hero>Blog</Hero>
      <SectionWrapper>
        <Text>This section is still under construction.</Text>
      </SectionWrapper>
    </main>
  );
}
