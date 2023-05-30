"use client";

import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
        <Box display="flex" columnGap={1} mb={2}>
          {[
            {
              title: "Github",
              href: "https://github.com/nishantpainter",
              alt: "Image for social site github",
              img: "/img/github.svg",
            },
            {
              title: "Linkedin",
              href: "https://in.linkedin.com/in/nishant-painter-31388582",
              alt: "Image for social site linkedin",
              img: "/img/linkedin.svg",
            },
            {
              title: "Stackoverflow",
              href: "https://stackoverflow.com/users/13841339/nishant-painter",
              alt: "Image for social site stackoverflow",
              img: "/img/so.svg",
            },
            {
              title: "Medium",
              href: "https://medium.com/@nishantpainter",
              alt: "Image for social site medium",
              img: "/img/medium.svg",
            },
          ].map(({ href, title, alt, img }) => (
            <a key={href} href={href} title={title} target="_blank">
              <Image height={24} width={30} src={img} alt={alt} />
            </a>
          ))}
        </Box>
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
