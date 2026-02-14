import type { PromptValues } from "@/features/home/schemas/prompt.schema";

export interface NalarInputProps {
  prompt: string;
  setPrompt: (value: string) => void;
  isLoading: boolean;
  onGenerate: (data: PromptValues) => void;
}
