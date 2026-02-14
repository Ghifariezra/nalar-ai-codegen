"use client";

import { Lightbulb } from "lucide-react";
import { memo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"; // 👈 Import ScrollArea
import TipsContent from "@/constants/content/tips.content.md";

export const NalarTips = memo(function NalarTips() {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/20 overflow-hidden">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="tips" className="border-none">
          {/* Trigger tetap di luar ScrollArea agar tidak ikut tergulung (Sticky) */}
          <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-zinc-900/50 transition-colors text-xs font-medium text-zinc-400 data-[state=open]:text-indigo-400 cursor-pointer">
            <span className="flex items-center gap-2">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500/70" />
              Tips Prompting Efektif
            </span>
          </AccordionTrigger>

          <AccordionContent className="p-0 border-t border-zinc-800/30">
            <ScrollArea className="h-40 w-full overflow-x-hidden">
              {/* Gunakan max-w-none agar prose tidak membatasi lebar konten secara sepihak */}
              <div className="p-6 text-zinc-300 text-sm prose prose-invert prose-zinc max-w-none w-full">
                <TipsContent />
              </div>
              <ScrollBar orientation="vertical" className="bg-transparent" />
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
});
