import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NalarMarkdown } from "./nalar.markdown";

interface NalarOutputProps {
  code: string;
  error: string | null;
  isLoading: boolean;
}

export function NalarOutput({ code, error, isLoading }: NalarOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!code) return;
    // Tips: Copy raw markdown atau hanya code block?
    // Biasanya user ingin copy semua respons kalau ada penjelasannya.
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="flex flex-col h-125 bg-[#0d0d0d] border-zinc-800 overflow-hidden shadow-2xl">
      {/* Header Output */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-zinc-800 shrink-0">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-mono text-zinc-400">
            Nalar Response
          </span>
        </div>
        {code && (
          <Button
            onClick={handleCopy}
            className="text-zinc-400 hover:text-white transition-colors"
            title="Copy All"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        )}
      </div>

      {/* Content Area */}
      {error ? (
        <div className="flex-1 p-6 overflow-auto">
          <div className="text-red-400 p-4 border border-red-900/50 rounded bg-red-950/20 font-mono text-sm">
            {error}
          </div>
        </div>
      ) : code ? (
        <NalarMarkdown content={code} />
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-zinc-700 gap-3 p-6">
          {isLoading ? (
            <div className="animate-pulse flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-zinc-800 border-t-emerald-500 animate-spin" />
              <span className="text-xs font-mono">
                Sedang merakit jawaban...
              </span>
            </div>
          ) : (
            <>
              <div className="w-16 h-16 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-center shadow-inner">
                <Terminal className="w-8 h-8 opacity-40" />
              </div>
              <p className="text-sm">Tanyakan sesuatu pada Nalar.</p>
            </>
          )}
        </div>
      )}
    </Card>
  );
}
