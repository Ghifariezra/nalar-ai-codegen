import { Github, Terminal } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

export const NalarFooter = memo(function NalarFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t mt-8 border-zinc-900 bg-black/50 py-6 px-6">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Sisi Kiri: Copyright & Status */}
                <div className="flex items-center gap-4 order-2 md:order-1">
                    <p className="text-zinc-500 text-[11px] font-mono tracking-wider">
                        © {currentYear} NALAR ENGINE. ALL RIGHTS RESERVED.
                    </p>
                    <div className="hidden md:flex items-center gap-2 px-2 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-emerald-500 uppercase">System Operational</span>
                    </div>
                </div>

                {/* Sisi Tengah: Branding singkat (Opsional) */}
                <div className="flex items-center gap-2 text-zinc-400 order-1 md:order-2">
                    <Terminal className="w-4 h-4 text-indigo-500" />
                    <span className="text-xs font-medium tracking-tight">Built for Developers by {process.env.NEXT_PUBLIC_AUTHOR}</span>
                </div>

                {/* Sisi Kanan: Links */}
                <div className="flex items-center gap-5 order-3">
                    <Link
                        href="https://github.com/Ghifariezra"
                        target="_blank"
                        className="text-zinc-500 hover:text-white transition-colors"
                    >
                        <Github className="w-4 h-4" />
                    </Link>
                    <Link
                        href="https://github.com/Ghifariezra/nalar-ai-codegen"
                        className="text-zinc-500 hover:text-indigo-400 transition-colors text-[11px] font-mono uppercase tracking-tighter"
                    >
                        Documentation
                    </Link>
                    <Link
                        href="#"
                        className="text-zinc-500 hover:text-indigo-400 transition-colors text-[11px] font-mono uppercase tracking-tighter"
                    >
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
});