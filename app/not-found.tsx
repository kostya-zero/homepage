import Hero from "@/components/blocks/hero";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "404",
    description: "This is a wrong page.",
};

export default function NotFound() {
    return (
        <figure className="flex flex-col items-center gap-3 my-16">
            <Hero>404</Hero>
            <p className="text-neutral-300">You weren&apos;t supposed to be here...</p>
        </figure>
    );
}
