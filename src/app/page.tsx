"use client";

import { Cpu, Lightbulb, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { NalarInput } from "@/features/home/components/nalar.input";
import { NalarOutput } from "@/features/home/components/nalar.outpu";
import { useNalar } from "@/features/home/hooks/use.nalar";
import { AccordionManager } from "@/components/shared/accordion.manager";
import TipsContent from "@/constants/content/tips.content.md";
import UserGuidelines from "@/constants/guidelines/user.guidelines.md";

export default function Home() {
  const { code, isLoading, error, generateCode } = useNalar();

  return (
    <main className="min-h-screen bg-black text-zinc-100 selection:bg-indigo-500/30">
      {/* 2. Main Content */}
      <div className="w-full px-4 py-8 lg:min-h-[calc(100vh-64px)] flex-1">
        <div className="grid lg:grid-cols-12 gap-6 h-full">
          {/* Kolom Kiri: Input (4 kolom) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Mulai Merakit.
              </h2>
              <p className="text-zinc-400 text-sm">
                Deskripsikan logika atau komponen yang kamu butuhkan secara
                detail.
              </p>
            </div>

            <NalarInput isLoading={isLoading} onGenerate={generateCode} />

            {/* Accordion Group dengan Scrollable Area jika konten panjang */}
            <div className="flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">
              <AccordionManager
                value="tips"
                icon={<Lightbulb className="w-4 h-4 text-amber-400" />}
                title="Tips Prompting Efektif"
                content={<TipsContent />}
              />
              <AccordionManager
                value="guidelines"
                icon={<ShieldCheck className="w-4 h-4 text-indigo-400" />}
                title="Panduan Penggunaan Nalar"
                content={<UserGuidelines />}
              />
            </div>
          </div>

          {/* Kolom Kanan: Output (8 kolom) */}
          <div className="lg:col-span-8 h-full">
            <NalarOutput code={code} error={error} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </main>
  );
}
