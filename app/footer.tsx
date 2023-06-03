"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Socials } from "@/app/components";

export default function Footer() {
  return (
    <Box component="footer" height={60}>
      <Box component={Container} height="100%">
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Socials size="md" />
        </Box>
      </Box>
    </Box>
  );
}
