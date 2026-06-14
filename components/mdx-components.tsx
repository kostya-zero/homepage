import { MDXComponents } from "mdx/types";
import CodeBlock from "./blocks/code-block";
import Link from "next/link";
import Image from "next/image";

const HoverLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return (
        <Link href={href} className="w-fit inline font-semibold text-foreground-bold underline underline-offset-[5px]">
            {children}
        </Link>
    );
};

const PostImage = ({ src, alt }: { src: string; alt: string }) => {
    return <Image src={src} width={1500} height={1000} className="mb-6 rounded-md shadow-lg" alt={alt} />;
};

export const components = {
    h1: ({ children }) => (
        <h1 className="text-3xl font-bold text-custom-white mt-10 mb-4 font-funnel leading-tight">{children}</h1>
    ),
    h2: ({ children }) => (
        <h2 className="text-2xl font-bold text-custom-white mt-8 mb-3 font-funnel leading-tight">{children}</h2>
    ),
    h3: ({ children }) => (
        <h3 className="text-xl font-bold text-custom-white mt-6 mb-2 font-funnel leading-tight">{children}</h3>
    ),
    p: ({ children }) => <p className="text-foreground leading-relaxed mb-5 text-[16px]">{children}</p>,
    strong: ({ children }) => <strong className="font-bold text-foreground-bold">{children}</strong>,
    code: ({ children }) => (
        <code className="bg-background-highlight border text-sm border-border rounded px-1.5 py-0.5 text-foreground-bold font-mono">
            {children}
        </code>
    ),
    ul: ({ children }) => <ul className="list-disc list-outside mb-5 ml-5 space-y-2 text-foreground">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-outside mb-5 ml-5 space-y-2 text-foreground">{children}</ol>,
    li: ({ children }) => <li className="pl-1">{children}</li>,
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-border-highlight pl-4 italic my-8 text-foreground-desc bg-background-highlight/30 py-4 rounded-r-lg">
            {children}
        </blockquote>
    ),
    hr: () => <hr className="my-10 border-border" />,
    a: ({ children, href }) => (
        <Link
            href={href!}
            className="text-foreground-bold underline underline-offset-4 decoration-border-highlight hover:decoration-foreground-bold transition-all"
        >
            {children}
        </Link>
    ),
    CodeBlock,
    HoverLink,
    PostImage,
} satisfies MDXComponents;

export function useMdxComponents(): MDXComponents {
    return components;
}
