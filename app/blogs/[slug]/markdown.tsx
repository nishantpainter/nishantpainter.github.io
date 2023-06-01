import Markdown from "markdown-to-jsx";
import Box from "@mui/material/Box";
import type { MarkdownToJSX } from "markdown-to-jsx";

const typography = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "small"].reduce(
  (overrides, tag) => ({
    ...overrides,
    [tag]: {
      component: Box,
      props: {
        component: tag,
      },
    },
  }),
  {}
);

const overrides: MarkdownToJSX.Overrides = {
  ...typography,
};

const options: MarkdownToJSX.Options = {
  overrides,
};

export function MarkdownToHTML({ markdown }: { markdown: string }) {
  return <Markdown options={options}>{markdown}</Markdown>;
}
