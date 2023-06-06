import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Markdown from "markdown-to-jsx";
import type { MarkdownToJSX } from "markdown-to-jsx";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";

const Link = styled(MuiLink)({
  textDecoration: "none",
});

const CopyIconButton = ({ content }: { content: string }) => {
  const [copied, setCopied] = useState(false);

  const timerRef = useRef<any>(null);

  const handleCopy = (event: React.SyntheticEvent) => {
    timerRef?.current && clearTimeout(timerRef.current);
    navigator?.clipboard?.writeText(content);
    setCopied(true);
    timerRef.current = setTimeout(() => setCopied(false), 5000);
  };

  useEffect(() => {
    return () => {
      timerRef?.current && clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <Box
      component={IconButton}
      onClick={handleCopy}
      position="absolute"
      top={1}
      right={1}
      zIndex={1}
      color="inherit"
    >
      <Fade in key={String(copied)}>
        {copied ? <DoneIcon /> : <ContentCopyIcon />}
      </Fade>
    </Box>
  );
};

const Code = ({ children, ...rest }: HTMLElement) => {
  const ref = useRef<HTMLElement>();
  const [renderCopyButton, setRenderCopyButton] = useState(false);

  useEffect(() => {
    const isDescendentToPRE = ref?.current?.parentElement?.tagName === "PRE";
    isDescendentToPRE && setRenderCopyButton(true);
  }, []);

  return (
    <Box component="code" position="relative" {...(rest as any)} ref={ref}>
      {children}
      {renderCopyButton && (
        <CopyIconButton content={children as unknown as string} />
      )}
    </Box>
  );
};

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
      color: "primary",
    },
  },
};

const codes = {
  pre: {
    component: Box,
    props: {
      borderRadius: "8px",
      component: "pre",
    },
  },
  code: {
    component: Code,
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
