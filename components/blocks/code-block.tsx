import { FaCode } from "react-icons/fa6";
import SyntaxHighlighter from "react-syntax-highlighter";
import { zenburn } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
    filename: string;
    language: string;
    children: React.ReactNode;
};

function CodeBlock({ filename, language, children }: Props) {
    // @ts-expect-error Props exists for children.
    const code = children!.props.children.props.children;
    return (
        <figure className="my-8 border border-border rounded-xl overflow-hidden bg-background shadow-xl">
            <div className="flex flex-row items-center justify-between px-4 py-2 bg-background-highlight/50 border-b border-b-border">
                <div className="flex items-center gap-2">
                    <FaCode size={14} className="text-foreground-muted" />
                    <span className="text-xs font-mono text-foreground-desc">{filename}</span>
                </div>
                <span className="text-[10px] uppercase text-foreground-muted font-bold">{language}</span>
            </div>
            <div className="bg-page-background overflow-x-auto">
                <SyntaxHighlighter
                    style={zenburn}
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
            </div>
        </figure>
    );
}

export default CodeBlock;
