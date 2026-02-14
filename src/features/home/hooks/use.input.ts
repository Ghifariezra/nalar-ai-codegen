import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  type PromptValues,
  promptSchema,
} from "@/features/home/schemas/prompt.schema";

export function useNalarInput(onGenerate: (data: PromptValues) => void) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
  } = useForm<PromptValues>({
    // Gunakan resolver dengan schema yang diimpor
    resolver: zodResolver(promptSchema),
    mode: "onChange",
    defaultValues: {
      prompt: "",
    },
  });

  const promptValue = watch("prompt");

  const onSubmit = handleSubmit((data) => {
    onGenerate(data);
    reset(); // Reset form setelah submit sukses
  });

  return {
    register,
    onSubmit,
    errors,
    isValid,
    charCount: promptValue?.length || 0,
  };
}
