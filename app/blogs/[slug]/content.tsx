"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Categories } from "@/app/components";
import hljs from "highlight.js";
import { MarkdownToHTML } from "./markdown";
import "highlight.js/styles/monokai-sublime.css";
import { useThemeContext } from "@/app/theme";

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
