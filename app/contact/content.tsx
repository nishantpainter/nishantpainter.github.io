"use client";

import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Link = styled(MuiLink)({
  textDecoration: "none",
});

export default function Content() {
  return (
    <Box component={Container} fixed minHeight="calc(100% - 165px)">
      <Box
        component="main"
        display="flex"
        flexDirection="column"
        rowGap={2}
        pt={5}
        pb={2}
      >
        <Typography variant="h4">
          <b>Contact</b>
        </Typography>
        <Typography variant="h6">Feel free to reach out.</Typography>

        <Typography>
          <Box component={Link} href="mailto:virtual.nishantpainter@gmail.com">
            Send me an email
          </Box>
          <br />
          <b>virtual.nishantpainter@gmail.com</b>
        </Typography>
        <Typography>
          <Box component={Link} href="https://twitter.com/nishantpainter">
            Twitter
          </Box>
          <br />
          <b>@nishantpainter</b>
        </Typography>
        <Typography>
          <Box
            component={Link}
            href="https://in.linkedin.com/in/nishant-painter-31388582"
          >
            LinkedIN
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}
