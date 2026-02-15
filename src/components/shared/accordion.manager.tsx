"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface AccordionManagerProps {
    title: string;
    content: React.ReactNode; // Gunakan ReactNode agar lebih fleksibel
    value: string;
    icon?: React.ReactNode;
    className?: string;
}

export function AccordionManager({
    title,
    content,
    value,
    icon,
    className
}: AccordionManagerProps) {
    return (
        <div className={cn("rounded-lg border border-zinc-800 bg-zinc-900/20 overflow-hidden", className)}>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={value} className="border-none">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-zinc-900/50 transition-colors text-xs font-medium text-zinc-400 data-[state=open]:text-indigo-400 cursor-pointer">
                        <span className="flex items-center gap-2">
                            {icon}
                            {title}
                        </span>
                    </AccordionTrigger>

                    <AccordionContent className="p-0 border-t border-zinc-800/30">
                        <ScrollArea className="h-40 w-full overflow-x-hidden">
                            <div className="p-6 text-zinc-300 text-sm prose prose-invert prose-zinc max-w-none w-full">
                                {content}
                            </div>
                            <ScrollBar orientation="vertical" className="bg-transparent" />
                        </ScrollArea>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}