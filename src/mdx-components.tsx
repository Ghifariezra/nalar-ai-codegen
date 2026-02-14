import type { MDXComponents } from "mdx/types";
import { sharedMDXComponents } from "@/features/home/components/mdx.styles";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...sharedMDXComponents,
    ...components,
  };
}
