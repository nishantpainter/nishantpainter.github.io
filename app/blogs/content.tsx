"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
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
            description,
            slug,
            date,
            categories,
          }: {
            title: string;
            description: string;
            slug: string;
            date: string;
            categories: string[];
          }) => (
            <Box
              component="article"
              key={slug}
              className="pointer"
              onClick={handleRedirect(`/blogs/${slug}`)}
              sx={{
                "& .title": {
                  transition: "all 0.1s ease",
                },
                "&:hover": {
                  "& .title": {
                    color: "secondary.light",
                    fontWeight: "bold",
                  },
                },
              }}
            >
              <Box display="flex" flexDirection="column" key={slug} rowGap={2}>
                <Typography className="title" variant="h6" key={slug}>
                  {title}
                </Typography>
                <Typography variant="body1" color="grey.900">
                  {description}
                </Typography>
                <Box display="flex" flexWrap="wrap" columnGap={1}>
                  {categories.map((category) => (
                    <Chip key={category} label={category} />
                  ))}
                </Box>
                <Typography color="grey.700">{date}</Typography>
              </Box>
              <Divider />
            </Box>
          )
        )}
      </Box>
    </Box>
  );
}
