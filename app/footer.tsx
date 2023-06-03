"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Container";
import { Socials } from "@/app/components";

export default function Footer() {
  return (
    <Box component="footer" height={100}>
      <Box component={Container} height="100%">
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Socials size="md" mb={1} />
          <Typography sx={{ textAlign: "center" }}>
            &copy; 2020 - {new Date().getFullYear()} Nishant Painter. All Rights
            Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
