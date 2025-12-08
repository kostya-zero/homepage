import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Teapot",
    description: "I'm a teapot!",
};

export const dynamic = "force-static";

export default async function Coffee() {
    return (
        <figure className="flex flex-col items-center gap-3 my-16">
            <p className="text-8xl font-bold mt-4 font-funnel leading-[1.1] bg-linear-to-b from-white to-neutral-300 bg-clip-text text-transparent">
                418
            </p>
            <p className="text-neutral-300">I&apos;m a teapot!</p>
        </figure>
    );
}
