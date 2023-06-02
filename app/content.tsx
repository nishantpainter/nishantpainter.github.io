"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Socials } from "@/app/components";

export default function Content() {
  return (
    <Box
      component={Container}
      fixed
      display="flex"
      alignItems="center"
      minHeight="100%"
    >
      <Box>
        <Typography variant="h4" gutterBottom>
          <b>
            Nishant&nbsp;
            <Box component="span" textTransform="uppercase">
              Painter
            </Box>
          </b>
        </Typography>
        <Typography mb={2}>Computer Programmer&nbsp;💻🕹️☯️</Typography>
        <Socials mb={2} />
        <Box mr={1} display="inline">
          <Button
            component={Link}
            href="/blogs"
            variant="contained"
            color="secondary"
          >
            Blogs
          </Button>
        </Box>
        <Button
          component={Link}
          href="/publications"
          variant="contained"
          color="secondary"
        >
          Publications
        </Button>
      </Box>
    </Box>
  );
}
