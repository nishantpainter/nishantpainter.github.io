import Markdown from "markdown-to-jsx";

export function MarkdownToHTML({ markdown }: { markdown: string }) {
  return <Markdown>{markdown}</Markdown>;
}
