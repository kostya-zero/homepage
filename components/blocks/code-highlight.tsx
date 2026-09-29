"use client";

import { useTheme } from "next-themes";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark, atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeHighlight({ code, language }: { code: string; language: string }) {
    const { resolvedTheme } = useTheme();
    const highlighterStyle = resolvedTheme === "light" ? atomOneLight : atomOneDark;

    return (
        <SyntaxHighlighter
            style={highlighterStyle}
            language={language}
            customStyle={{
                background: "transparent",
                padding: "1.25rem",
                fontSize: "0.875rem",
                lineHeight: "1.6",
                margin: 0,
            }}
            codeTagProps={{ className: "font-mono bg-transparent inline-block min-w-full" }}
        >
            {code}
        </SyntaxHighlighter>
    );
}
