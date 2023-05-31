"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/navigation";

export default function Content({ blogs }: any) {
  const router = useRouter();

  const handleRedirect = (path: string) => () => {
    router.push(path);
  };

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
          <b>Blogs</b>
        </Typography>
        <Divider />
        {blogs.map(
          ({
            title,
            slug,
            date,
          }: {
            title: string;
            slug: string;
            date: string;
          }) => (
            <Box
              component="article"
              key={slug}
              className="pointer"
              onClick={handleRedirect(`/blogs/${slug}`)}
              sx={{
                "& > .title": {
                  transition: "all 0.1s ease",
                },
                "&:hover": {
                  "& > .title": {
                    color: "secondary.light",
                    fontWeight: "bold",
                  },
                },
              }}
            >
              <Typography
                className="title"
                variant="body1"
                key={slug}
                gutterBottom
              >
                {title}
              </Typography>
              <Typography color="grey.700">{date}</Typography>
              <Divider />
            </Box>
          )
        )}
      </Box>
    </Box>
  );
}
