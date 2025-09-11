import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
    filePath: string;   // e.g. "/code/app.py"
    language: string;   // e.g. "python", "java", "cpp"
    title?: string;     // optional heading
}

const CodeBlock: React.FC<CodeBlockProps> = ({ filePath, language, title }) => {
    const [code, setCode] = useState<string | null>(null);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        fetch(filePath)
            .then((res) => res.text())
            .then((text) => setCode(text))
            .catch(() => setCode("// Failed to load code snippet"));
    }, [filePath]);

    return (
        <div className="code-box">
            {title && <h3>{title}</h3>}
            <button
                onClick={() => setExpanded(!expanded)}
                style={{
                    marginBottom: "0.5rem",
                    padding: "0.4rem 0.8rem",
                    background: "#324b7c",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                {expanded ? "Hide Code" : "Show Code"}
            </button>

            {expanded && code && (
                <SyntaxHighlighter language={language} style={vscDarkPlus}>
                    {code}
                </SyntaxHighlighter>
            )}
        </div>
    );
};

export default CodeBlock;
