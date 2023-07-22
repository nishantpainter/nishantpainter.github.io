"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type ProjectProps = {
  href: string;
  title: string;
  children: React.ReactElement;
};

function Project({ href, title, children }: ProjectProps) {
  return (
    <Box
      component="article"
      display="flex"
      flexDirection="column"
      p={3}
      rowGap={2}
      boxShadow={8}
      borderRadius={1}
    >
      <Typography variant="h6">
        <b>{title}</b>
      </Typography>
      {children}
      <Box>
        <Button
          component="a"
          variant="outlined"
          color="primary"
          href={href}
          target="_blank"
        >
          See Project
        </Button>
      </Box>
    </Box>
  );
}

export default function Content() {
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
        <Typography variant="h4">
          <b>Projects</b>
        </Typography>
        <Project
          title="Personal Kanban"
          href="https://personalkanban.js.org/showcase.html"
        >
          <>
            <Typography>
              Personal Kanban is an offline capable application or tool that
              implements kanban to manage work at personal level. Work items can
              be represented as records and columns to depict each stage of your
              work process. Columns can be as simple as &uml;todo &uml;,
              &uml;in-progress &uml; and &uml;done&uml;, or it can be complex to
              suit your flow.
            </Typography>
          </>
        </Project>
        <Project title="Tiny Manager" href="https://tinymanager.js.org/#/">
          <>
            <Typography>
              Tiny Manager is a simple application that assists you in managing
              your pet projects. Along with project management it allows mundane
              management using todos and a simple notepad application, all at
              one place.
            </Typography>
          </>
        </Project>
        <Project title="Timesheet" href="https://timesheet.js.org/">
          <>
            <Typography>
              Timesheet is an application for managing and quickly accessing
              your daily work time. It has a minimalistic features set required
              and sleek design. Stop opening, closing your local text editor for
              persisting and calculating the timesheet and hours manually. Start
              using Timesheet now.
            </Typography>
          </>
        </Project>

        <Project
          title="Made in India CSS"
          href="https://nishantpainter.com/made-in-india-css/"
        >
          <>
            <Typography>
              Made in India CSS is a collection of 15 distinct background
              patterns generated using linear and radial CSS gradients. You can
              use these tricolor gradient patterns in building your website or
              web application by importing the made-in-india css file and using
              various class.
            </Typography>
          </>
        </Project>
      </Box>
    </Box>
  );
}
