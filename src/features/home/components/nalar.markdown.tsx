import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { sharedMDXComponents } from "./mdx.styles";

export function NalarMarkdown({ content }: { content: string }) {
  return (
    <ScrollArea className="flex-1 w-full overflow-hidden bg-[#0d0d0d]">
      <div className="w-full p-8 animate-in fade-in duration-700">
        <ReactMarkdown
          components={sharedMDXComponents}
          remarkPlugins={[remarkGfm]}
        >
          {content}
        </ReactMarkdown>
      </div>
      <ScrollBar orientation="vertical" className="bg-transparent" />
    </ScrollArea>
  );
}
