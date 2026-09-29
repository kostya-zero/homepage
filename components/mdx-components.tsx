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
    return <Image src={src} width={1500} height={1000} className="rounded-md" alt={alt} />;
};

export const components = {
    CodeBlock,
    HoverLink,
    PostImage,
} satisfies MDXComponents;
