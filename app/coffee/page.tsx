import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Teapot",
    description: "I'm a teapot!",
};

export const dynamic = "force-static";

export default async function Coffee() {
    return (
        <>
            <p className="text-7xl font-bold font-funnel text-center leading-[1.0] mt-7 text-neutral-50">418</p>
            <p className="text-center italic mb-7 text-neutral-300">I am a teapot!</p>
        </>
    );
}
