import React from "react";

interface CodeRendererProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeRenderer({
  code,
  language = "text",
  title,
}: CodeRendererProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mb-4 mt-0 group">
      {title && (
        <div className="absolute top-0 right-0 px-4 py-2 rounded-tr bg-[#23262f] text-sm text-gray-400">
          {title}
        </div>
      )}
      <div className="overflow-x-auto max-w-full [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-500/50 hover:[&::-webkit-scrollbar-thumb]:bg-gray-400/50 [&::-webkit-scrollbar-track]:bg-gray-800/30 relative">
        <pre
          className={`language-${language} rounded-lg mt-0 ${
            title ? "pt-12" : ""
          } pr-6`}
          style={{
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none", // Hide scrollbar in IE/Edge
            scrollbarWidth: "thin", // Firefox
            scrollbarColor: "rgb(107 114 128 / 0.5) rgb(31 41 55 / 0.3)", // For Firefox
            marginBlock: "0 1rem",
          }}
        >
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-3 p-2 rounded-lg opacity-80 hover:opacity-100 bg-gray-800 hover:bg-gray-700 active:bg-gray-600 transition-all duration-200 ease-in-out cursor-pointer border border-gray-600 shadow-md"
            aria-label="Copy code"
          >
            {copied ? (
              // Copy button
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-400"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
              // Paste button
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-300"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            )}
          </button>
          <code className="block whitespace-pre">{code}</code>
        </pre>
      </div>
    </div>
  );
}
