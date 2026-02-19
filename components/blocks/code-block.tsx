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
        <figure className="border border-border rounded-md overflow-hidden bg-background ">
            <div className="flex flex-row items-center gap-3 px-3 py-2">
                <FaCode size={16} /> <p className="text-sm">{filename}</p>
            </div>
            <div className="h-[0.5px] w-full bg-border"></div>
            <code className="bg-page-background overflow-x-scroll">
                <SyntaxHighlighter
                    style={zenburn}
                    language={language}
                    customStyle={{ background: "#0a0a0a" }}
                    codeTagProps={{ className: "font-mono text-sm bg-page-background prose" }}
                >
                    {code}
                </SyntaxHighlighter>
            </code>
        </figure>
    );
}

export default CodeBlock;
