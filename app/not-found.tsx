import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "404",
    description: "This is a wrong page.",
};

export default function NotFound() {
    return (
        <figure className="flex flex-col items-center gap-3 my-16">
            <p className="text-8xl font-bold mt-4 font-funnel leading-[1.1] bg-linear-to-b from-white to-neutral-300 bg-clip-text text-transparent">
                404
            </p>
            <p className="text-neutral-300">You weren&apos;t supposed to be here...</p>
        </figure>
    );
}
