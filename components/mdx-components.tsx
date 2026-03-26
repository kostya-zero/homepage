import { MDXComponents } from "mdx/types";
import CodeBlock from "./blocks/code-block";
import HoverText from "./blocks/hovertext";
import Link from "next/link";

const HoverLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return (
        <Link href={href} className="w-fit inline font-semibold text-foreground-bold underline underline-offset-[5px]">
            {children}
        </Link>
    );
};

export const components = {
    h1: ({ children }) => <h1 className="text-3xl font-bold text-white">{children}</h1>,
    h2: ({ children }) => <h1 className="text-2xl font-bold text-white">{children}</h1>,
    h3: ({ children }) => <h1 className="text-xl font-bold text-white">{children}</h1>,
    p: ({ children }) => <p className="text-foreground leading-[26px]">{children}</p>,
    strong: ({ children }) => <strong className="font-semibold text-foreground-bold">{children}</strong>,
    code: ({ children }) => (
        <code className="bg-background border text-sm border-border rounded-md px-1">{children}</code>
    ),
    CodeBlock,
    HoverLink,
} satisfies MDXComponents;

export function useMdxComponents(): MDXComponents {
    return components;
}
