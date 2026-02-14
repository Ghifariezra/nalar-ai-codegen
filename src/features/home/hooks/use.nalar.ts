import { Code, ConnectError } from "@connectrpc/connect";
import { useCallback, useState } from "react";
import type { PromptValues } from "@/features/home/schemas/prompt.schema";
import { codeGenClient } from "@/lib/client";

export function useNalar() {
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateCode = useCallback(async (values: PromptValues) => {
    // Gunakan values.prompt hasil validasi Zod
    const currentPrompt = values.prompt;
    if (!currentPrompt.trim()) return;

    setIsLoading(true);
    setCode("");
    setError(null);

    try {
      // 👇 Kirim currentPrompt ke API
      for await (const res of codeGenClient.generateStream({
        prompt: currentPrompt,
      })) {
        setCode((prev) => prev + res.codeChunk);
      }
    } catch (err) {
      // Cek apakah error ini berasal dari ConnectRPC
      if (err instanceof ConnectError) {
        console.error("Nalar Error:", err);

        // 1. Dapatkan Status Code (Enum)
        // Contoh: Code.ResourceExhausted (8), Code.InvalidArgument (3)
        const status = err.code;
        console.log("Status Code:", status);
        // 2. Dapatkan Pesan Asli dari Server
        // Contoh: "Too many requests, slow down!"
        const serverMessage = err.message;

        // --- CONTOH HANDLING SPESIFIK ---
        switch (status) {
          case Code.Unknown:
            setError(
              "⏳ Terlalu banyak request. Mohon tunggu sebentar (Rate Limit).",
            );
            break;
          case Code.InvalidArgument:
            setError("⚠️ Prompt tidak valid atau terlalu pendek.");
            break;
          case Code.Unavailable:
            setError("🔌 Server sedang sibuk atau tidak dapat dihubungi.");
            break;
          case Code.PermissionDenied:
            setError(
              "🚫 Akses ditolak. Pastikan Anda memiliki izin yang benar.",
            );
            break;
          default:
            // Tampilkan pesan asli dari server untuk error lain
            setError(`Error: ${serverMessage}`);
        }
      } else if (err instanceof Error) {
        // Error umum (misal: client offline total, bug di React)
        setError("Terjadi kesalahan sistem client.");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    prompt,
    setPrompt,
    code,
    isLoading,
    error,
    generateCode,
  };
}
