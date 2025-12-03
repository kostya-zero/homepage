import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "404",
    description: "This is a wrong page.",
};

export default function NotFound() {
    return (
        <>
            <p className="text-7xl font-bold font-funnel text-center mt-7 text-neutral-50">404</p>
            <p className="text-center italic mb-7 text-neutral-300">You weren&apos;t supposed to be here...</p>
        </>
    );
}
