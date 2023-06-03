import Markdown from "markdown-to-jsx";
import type { MarkdownToJSX } from "markdown-to-jsx";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import { styled } from "@mui/material/styles";

const Link = styled(MuiLink)({
  textDecoration: "none",
});

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

const links = {
  a: {
    component: Link,
    props: {
      color: "secondary",
    },
  },
};

const codes = {
  pre: {
    component: Box,
    props: {
      p: 1,
      borderRadius: 1,
      sx: {
        backgroundColor: "grey.200",
      },
      component: "pre",
    },
  },
};

const overrides: MarkdownToJSX.Overrides = {
  ...typography,
  ...links,
  ...codes,
};

const options: MarkdownToJSX.Options = {
  overrides,
};

export function MarkdownToHTML({ markdown }: { markdown: string }) {
  return <Markdown options={options}>{markdown}</Markdown>;
}
