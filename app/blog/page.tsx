import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Konstatin Zero",
  description: "My blog posts.",
};

export default function Blog() {
    return (
        <>
            <div className="m-[16px]">
                <h2 className="text-4xl font-bold font-worksans leading-[1.2]">Blog</h2>
                <p className="text-neutral-700 dark:text-neutral-300">This section is not available at this moment. It will be available with updates.</p>
            </div>
        </>
    )
}