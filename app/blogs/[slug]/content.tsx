"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Categories } from "@/app/components";
import { useThemeContext } from "@/app/theme";
import { MarkdownToHTML } from "./markdown";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage('javascript', javascript);

export default function Content({ blog }: any) {
  const router = useRouter();
  const { isDarkMode } = useThemeContext();

  const handleCategoryClick = (event: React.SyntheticEvent, value: string) => {
    event.stopPropagation();
    router.push(`/blogs/?search=${value}`);
  };

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Box component={Container} fixed minHeight="100%">
      <Box
        component="main"
        display="flex"
        flexDirection="column"
        rowGap={2}
        pt={5}
        pb={2}
      >
        <Typography variant="h4" component="h1">
          <b>{blog.title}</b>
        </Typography>
        <Categories
          items={blog.categories}
          onClick={handleCategoryClick}
          darkMode={isDarkMode}
        />
        <MarkdownToHTML markdown={blog.content} />
      </Box>
    </Box>
  );
}
