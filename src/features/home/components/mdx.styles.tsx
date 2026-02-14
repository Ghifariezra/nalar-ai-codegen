import { Check, Copy, Terminal } from "lucide-react";
import type { JSX } from "react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Komponen Code Block dengan Header dan Tombol Copy
const CodeBlock = ({
  language,
  value,
}: {
  language: string;
  value: string;
}) => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-6 rounded-lg border border-zinc-800 bg-[#0d0d0d] overflow-hidden shadow-2xl">
      {/* Header Kode */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/50 border-b border-zinc-800/50">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
            {language || "code"}
          </span>
        </div>
        {/* FIX: lint/a11y/useButtonType - Menambahkan type="button" */}
        <button
          type="button"
          onClick={onCopy}
          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-zinc-800 rounded"
        >
          {copied ? (
            <Check className="w-3 h-3 text-emerald-500" />
          ) : (
            <Copy className="w-3 h-3 text-zinc-500" />
          )}
        </button>
      </div>

      <SyntaxHighlighter
        style={vscDarkPlus}
        language={language}
        PreTag="div"
        customStyle={{
          margin: 0,
          padding: "1.25rem",
          background: "transparent",
          fontSize: "0.875rem",
          lineHeight: "1.6",
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export const sharedMDXComponents = {
  h1: ({ children }: JSX.IntrinsicElements["h1"]) => (
    <h1 className="text-2xl font-bold mb-6 text-white mt-10 border-b border-zinc-800 pb-2 flex items-center gap-3">
      <span className="w-1 h-6 bg-indigo-500 rounded-full" /> {children}
    </h1>
  ),
  h2: ({ children }: JSX.IntrinsicElements["h2"]) => (
    <h2 className="text-xl font-semibold mb-4 text-zinc-100 mt-8">
      {children}
    </h2>
  ),
  h3: ({ children }: JSX.IntrinsicElements["h3"]) => (
    <h3 className="text-lg font-medium mb-3 text-zinc-200 mt-6">{children}</h3>
  ),
  p: ({ children }: JSX.IntrinsicElements["p"]) => (
    // Ganti 'wrap-break-word' menjadi 'break-words'
    <p className="mb-5 text-zinc-400 leading-relaxed tracking-wide break-words whitespace-pre-wrap">
      {children}
    </p>
  ),
  ul: ({ children }: JSX.IntrinsicElements["ul"]) => (
    <ul className="mb-6 ml-4 space-y-3 list-none">{children}</ul>
  ),
  li: ({ children }: JSX.IntrinsicElements["li"]) => (
    <li className="flex items-start gap-3 text-zinc-400 text-sm mb-2 w-full">
      {/* Gunakan shrink-0 agar bullet tidak gepeng saat teks panjang */}
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500/50 shrink-0" />

      {/* PENTING: Gunakan 'min-w-0' dan 'flex-1' agar container anak 
         menghormati batas lebar flexbox parent-nya.
      */}
      <div className="flex-1 min-w-0 break-words overflow-hidden">
        {children}
      </div>
    </li>
  ),
  // FIX: lint/suspicious/noExplicitAny - Mengganti any dengan tipe yang lebih spesifik
  code: ({
    inline,
    className,
    children,
    ...props
  }: {
    inline?: boolean;
    className?: string;
    children?: React.ReactNode;
  }) => {
    const match = /language-(\w+)/.exec(className || "");
    const content = String(children).replace(/\n$/, "");

    return !inline && match ? (
      <CodeBlock language={match[1]} value={content} />
    ) : (
      <code
        // Tambahkan 'break-all' atau 'break-words' untuk inline code yang sangat panjang
        className="bg-zinc-800/50 text-indigo-300 px-1.5 py-0.5 rounded text-[13px] font-mono border border-zinc-700/30 break-all overflow-wrap-anywhere"
        {...props}
      >
        {children}
      </code>
    );
  },
  blockquote: ({ children }: JSX.IntrinsicElements["blockquote"]) => (
    <blockquote className="my-6 border-l-4 border-indigo-500/30 bg-indigo-500/5 px-6 py-4 rounded-r-lg italic text-zinc-300 shadow-inner">
      {children}
    </blockquote>
  ),
  strong: ({ children }: JSX.IntrinsicElements["strong"]) => (
    <strong className="font-bold text-zinc-100">{children}</strong>
  ),
  table: ({ children }: JSX.IntrinsicElements["table"]) => (
    <div className="my-6 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/20 shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          {children}
        </table>
      </div>
    </div>
  ),
  thead: ({ children }: JSX.IntrinsicElements["thead"]) => (
    <thead className="bg-zinc-900/50 border-b border-zinc-800 text-zinc-100 font-semibold uppercase tracking-wider text-[11px]">
      {children}
    </thead>
  ),
  th: ({ children }: JSX.IntrinsicElements["th"]) => (
    <th className="px-6 py-4 font-bold border-r border-zinc-800/50 last:border-none">
      {children}
    </th>
  ),
  td: ({ children }: JSX.IntrinsicElements["td"]) => (
    <td className="px-6 py-4 text-zinc-400 border-b border-zinc-800/30 border-r last:border-none transition-colors group-hover:bg-indigo-500/5">
      {children}
    </td>
  ),
  tr: ({ children }: JSX.IntrinsicElements["tr"]) => (
    <tr className="group border-b border-zinc-800/30 last:border-none hover:bg-zinc-800/30 transition-all duration-200">
      {children}
    </tr>
  ),
};
