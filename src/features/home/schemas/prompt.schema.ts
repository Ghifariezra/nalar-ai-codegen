import { z } from "zod";

export const promptSchema = z.object({
  prompt: z
    .string()
    .min(10, "Deskripsi terlalu pendek, coba berikan detail lebih banyak.")
    .max(2000, "Prompt maksimal 2000 karakter.")
    .trim(),
});

// Pastikan ini diekspor agar hook-form bisa mengenali bentuk datanya
export type PromptValues = z.infer<typeof promptSchema>;
