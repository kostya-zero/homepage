import { MDXComponents } from "mdx/types";

export const components = {
    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
    h3: ({ children }) => <h1 className="text-xl font-bold">{children}</h1>,
    p: ({ children }) => <p className="font-light">{children}</p>,
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
} satisfies MDXComponents;

export function useMdxComponents(): MDXComponents {
    return components;
}
