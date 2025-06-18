"use client"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn("markdown-content", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold mb-4 text-amber-900 dark:text-cyan-300 border-b border-amber-200 dark:border-cyan-400/30 pb-2">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-semibold mb-3 text-amber-800 dark:text-cyan-300 mt-6">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-medium mb-2 text-amber-700 dark:text-cyan-400 mt-4">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-base font-medium mb-2 text-amber-700 dark:text-cyan-400 mt-3">{children}</h4>
          ),

          // Paragraphs
          p: ({ children }) => <p className="mb-3 leading-relaxed text-gray-700 dark:text-cyan-100">{children}</p>,

          // Lists
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700 dark:text-cyan-100 ml-4">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-700 dark:text-cyan-100 ml-4">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="mb-1">{children}</li>,

          // Links
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 dark:text-cyan-400 hover:text-amber-800 dark:hover:text-cyan-300 underline decoration-amber-300 dark:decoration-cyan-500 hover:decoration-amber-500 dark:hover:decoration-cyan-300 transition-colors"
            >
              {children}
            </a>
          ),

          // Code
          code: ({ inline, children }) => {
            if (inline) {
              return (
                <code className="bg-amber-100 dark:bg-cyan-900/30 text-amber-800 dark:text-cyan-300 px-1.5 py-0.5 rounded text-sm font-mono">
                  {children}
                </code>
              )
            }
            return (
              <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-sm font-mono overflow-x-auto border border-amber-200 dark:border-cyan-400/30">
                {children}
              </code>
            )
          },

          // Pre (code blocks)
          pre: ({ children }) => (
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto border border-amber-200 dark:border-cyan-400/30">
              {children}
            </pre>
          ),

          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-amber-400 dark:border-cyan-400 pl-4 py-2 mb-4 bg-amber-50 dark:bg-cyan-900/20 italic text-amber-800 dark:text-cyan-200">
              {children}
            </blockquote>
          ),

          // Tables - Fixed implementation
          table: ({ children }) => (
            <div className="my-4 overflow-x-auto rounded-lg border border-amber-200 dark:border-cyan-400/30">
              <table className="min-w-full border-collapse">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-amber-100 dark:bg-cyan-900/30">{children}</thead>,
          tbody: ({ children }) => <tbody className="bg-white dark:bg-gray-800">{children}</tbody>,
          tr: ({ children }) => (
            <tr className="border-b border-amber-200 dark:border-cyan-400/30 hover:bg-amber-50 dark:hover:bg-cyan-900/10 transition-colors">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left text-xs font-semibold text-amber-900 dark:text-cyan-300 uppercase tracking-wider">
              {children}
            </th>
          ),
          td: ({ children }) => <td className="px-4 py-3 text-sm text-gray-700 dark:text-cyan-100">{children}</td>,

          // Horizontal rule
          hr: () => <hr className="my-6 border-amber-200 dark:border-cyan-400/30" />,

          // Strong/Bold
          strong: ({ children }) => (
            <strong className="font-semibold text-amber-900 dark:text-cyan-200">{children}</strong>
          ),

          // Emphasis/Italic
          em: ({ children }) => <em className="italic text-amber-800 dark:text-cyan-300">{children}</em>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
