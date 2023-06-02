"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Categories } from "@/app/components";
import { MarkdownToHTML } from "./markdown";

export default function Content({ blog }: any) {
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
        <Categories items={blog.categories} />
        <MarkdownToHTML markdown={blog.content} />
      </Box>
    </Box>
  );
}
