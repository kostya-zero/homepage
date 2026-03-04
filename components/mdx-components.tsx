import { MDXComponents } from "mdx/types";
import CodeBlock from "./blocks/code-block";
import HoverText from "./blocks/hovertext";
import Link from "next/link";

const HoverLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return (
        <Link href={href}>
            <HoverText className="w-fit inline font-semibold">{children}</HoverText>
        </Link>
    );
};

export const components = {
    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
    h3: ({ children }) => <h1 className="text-xl font-bold">{children}</h1>,
    p: ({ children }) => <p className="font-light">{children}</p>,
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    code: ({ children }) => (
        <code className="bg-background border text-sm border-border rounded-md px-1">{children}</code>
    ),
    CodeBlock,
    HoverLink,
} satisfies MDXComponents;

export function useMdxComponents(): MDXComponents {
    return components;
}
