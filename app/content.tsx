"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Typewriter from "typewriter-effect";

function Description() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        <b>
          Nishant&nbsp;
          <Box component="span" textTransform="uppercase">
            Painter
          </Box>
        </b>
      </Typography>
      {/* <Announcement /> */}
      <Typography mb={2}>Computer Programmer&nbsp;💻🕹️☯️</Typography>
      <Box mr={1} display="inline">
        <Button
          component={Link}
          href="/blogs"
          variant="outlined"
          color="primary"
        >
          Blogs
        </Button>
      </Box>
      <Button
        component={Link}
        href="/projects"
        variant="outlined"
        color="primary"
      >
        Projects
      </Button>
    </Box>
  );
}

function Announcement() {
  return (
    <Typography variant="h6" gutterBottom>
      <b>
        <Typewriter
          options={{ loop: true, delay: 25, deleteSpeed: 10 }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Now offering ")
              .pauseFor(1000)
              .typeString("one-to-one mentorship and training.")
              .pauseFor(1000)
              .deleteChars(35)
              .pauseFor(1000)
              .typeString("industrial training.")
              .pauseFor(1000)
              .deleteChars(20)
              .pauseFor(1000)
              .typeString("consultations.")
              .pauseFor(1200)
              .deleteChars(27)
              .start();
          }}
        />
      </b>
    </Typography>
  );
}

export default function Content() {
  return (
    <Box
      component={Container}
      fixed
      display="flex"
      alignItems="center"
      minHeight="calc(100% - 165px)" // removing header and footer space
    >
      <Description />
    </Box>
  );
}
