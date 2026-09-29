import CodeHighlight from "./code-highlight";

type Props = {
    filename: string;
    language: string;
    children: React.ReactNode;
};

function CodeBlock({ filename, language, children }: Props) {
    // MDX renders a fenced block as <pre><code>text</code></pre>.
    // @ts-expect-error Props exists for children.
    const code: string = children!.props.children.props.children;

    return (
        <figure className="not-prose my-8 border border-border rounded-xl overflow-hidden bg-background">
            <div className="flex flex-row items-center justify-between px-4 py-2 bg-background-highlight/50 border-b border-b-border">
                <span className="text-xs font-mono text-foreground-desc">{filename}</span>
                <span className="text-[10px] uppercase text-foreground-muted font-bold">{language}</span>
            </div>
            <div className="bg-page-background overflow-x-auto">
                <CodeHighlight code={code} language={language} />
            </div>
        </figure>
    );
}

export default CodeBlock;
