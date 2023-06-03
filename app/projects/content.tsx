"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Image({ alt, src }: { alt: string; src: string }) {
  return (
    <Box
      width="60%"
      component="img"
      src={src}
      alt={alt}
      sx={{
        maxInlineSize: "100%",
        blockSize: "auto",
      }}
    />
  );
}

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
          color="secondary"
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
            <Image
              src="https://camo.githubusercontent.com/5fbef426907f903d7967afd30d58914e52a7e29b4941d9cf062cef46fdc756ae/68747470733a2f2f6e697368616e747061696e7465722e6769746875622e696f2f706572736f6e616c2d6b616e62616e2f726561646d655f6c6f676f2e706e67"
              alt="Image for personal kanban"
            />
            <Typography>
              Personal Kanban is an offline capable application or tool that
              implements kanban to manage work at personal level. Work items can
              be represented as records and columns to depict each stage of your
              work process. Columns can be as simple as &uml;todo &uml;,
              &uml;in-progress &uml; and &uml;done&uml;, or it can be complex to
              suit your flow.
            </Typography>
            <Typography>
              It&acute;s a tool to visualize and optimize your workflow.
              Physical boards are popular among few, while virtual boards like
              Personal Kanban play a critical role in agile software development
              considering their accessibility, simplicity and elegant display.
              Regardless of whether a board is physical or virtual, it must
              depict work visually along with clearly identifying the blockage
              and other dependencies. Each of these features are offered
              seamlessly by Personal Kanban.
            </Typography>
            <Typography>
              Plan your work with flexibility, identify and resolve bottlenecks
              and overview your complete work visually.
            </Typography>
          </>
        </Project>
        <Project title="Tiny Manager" href="https://tinymanager.js.org/#/">
          <>
            <Image
              src="https://camo.githubusercontent.com/c08011c65d925c19f30724bdf1bb8f9a6f03e783a47c6747f27bd24a345c4ba2/68747470733a2f2f6e697368616e747061696e7465722e6769746875622e696f2f74696e792d6d616e616765722f726561646d655f6c6f676f2e706e67"
              alt="Image for tiny manager"
            />
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
            <Image
              src="https://camo.githubusercontent.com/be93ff84099217c5113c3a9919b7c13377f35e88d79c2d318766667c9e01a07e/68747470733a2f2f74696d6573686565742e6a732e6f72672f726561646d652d6c6f676f2e706e67"
              alt="Image for timesheet"
            />
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
            <Image
              src="https://raw.githubusercontent.com/nishantpainter/made-in-india-css/master/img/default.png"
              alt="Image for made in india css"
            />
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
