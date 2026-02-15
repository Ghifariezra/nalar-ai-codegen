import { memo } from "react";
import { Badge } from "../ui/badge";
import { Cpu } from "lucide-react";

export const NalarHeader = memo(function NalarHeader() {
    return (
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
                    <span className="font-mono text-[10px]">v1.0.3-beta</span>
                </Badge>
            </div>
        </header>
    );
});