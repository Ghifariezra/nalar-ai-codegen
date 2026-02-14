import { Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useNalarInput } from "@/features/home/hooks/use.input";
import type { NalarInputProps } from "@/features/home/types/props/input.props";

export function NalarInput({
  isLoading,
  onGenerate,
}: Omit<NalarInputProps, "prompt" | "setPrompt">) {
  const { register, onSubmit, errors, isValid, charCount } =
    useNalarInput(onGenerate);

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <Card
        className={`p-1 bg-zinc-900/50 border-zinc-800 shadow-xl backdrop-blur-sm transition-all focus-within:ring-1 
                ${errors.prompt ? "ring-red-500/50 border-red-500/50" : "focus-within:ring-indigo-500/50 focus-within:border-indigo-500/50"}`}
      >
        <div className="relative">
          <Textarea
            {...register("prompt")}
            placeholder="Jelaskan logika yang ingin kamu rakit..."
            disabled={isLoading}
            className="w-full h-37.5 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-200 p-4 resize-none font-mono text-sm placeholder:text-zinc-600 custom-scrollbar"
          />

          <div className="absolute bottom-3 right-3 flex items-center gap-3">
            {/* Karakter Counter */}
            <span
              className={`text-[10px] font-mono ${charCount > 2000 ? "text-red-500" : "text-zinc-600"}`}
            >
              {charCount}/2000
            </span>

            <Button
              type="submit"
              disabled={!isValid || isLoading}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-lg shadow-indigo-500/20 cursor-pointer disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Merakit...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" /> Generate
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>

      {/* Pesan Error Validasi Zod */}
      {errors.prompt && (
        <p className="text-[10px] text-red-400 ml-2 font-mono italic animate-in fade-in slide-in-from-top-1">
          {errors.prompt.message}
        </p>
      )}
    </form>
  );
}
