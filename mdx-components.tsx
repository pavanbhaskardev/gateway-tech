import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export default function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    ...components,
  };
}
