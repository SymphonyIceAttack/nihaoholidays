import { Streamdown } from "streamdown";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({
  content,
  className = "prose prose-lg max-w-none dark:prose-invert",
}: MarkdownRendererProps) {
  return (
    <div className={className}>
      <Streamdown mode="static">{content}</Streamdown>
    </div>
  );
}
