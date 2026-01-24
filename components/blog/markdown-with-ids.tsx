import { MarkdownRenderer } from "@/components/blog/markdown-renderer";

export function MarkdownWithIds({ content }: { content: string }) {
  return <MarkdownRenderer content={content} />;
}
