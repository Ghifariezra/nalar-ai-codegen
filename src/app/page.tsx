"use client";

import { Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { NalarInput } from "@/features/home/components/nalar.input";
import { NalarOutput } from "@/features/home/components/nalar.outpu";
import { NalarTips } from "@/features/home/components/nalar.tips";
import { useNalar } from "@/features/home/hooks/use.nalar";

export default function Home() {
  const { code, isLoading, error, generateCode } = useNalar();

  return (
    <main className="min-h-screen bg-black text-zinc-100 selection:bg-indigo-500/30">
      {/* 1. Navbar / Header */}
      <header className="border-b border-zinc-900 bg-black/50 backdrop-blur-md sticky top-0 z-10">
        <div className="w-full px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Jika belum ada logo, pakai Icon CPU sementara */}
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.5)]">
              <Cpu className="text-white w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight">Nalar</h1>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
                AI Code Architect
              </p>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="hidden md:inline-flex h-6 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/20 transition-all gap-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
            </span>
            <span className="font-mono text-[10px]">v1.0.0-beta</span>
          </Badge>
        </div>
      </header>

      {/* 2. Main Content */}
      <div className="w-full px-4 py-8 lg:h-[calc(100vh-64px)]">
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

            {/* Tips Section */}
            <NalarTips />
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
