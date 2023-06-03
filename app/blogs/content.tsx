"use client";

import React, { useState } from "react";
import { matchSorter } from "match-sorter";
import { useRouter, useSearchParams } from "next/navigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Categories } from "@/app/components";

import SearchIcon from "@mui/icons-material/Search";

export default function Content({ blogs: blogsProp }: any) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleRedirect = (path: string) => () => {
    router.push(path);
  };

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleCategoryClick = (event: React.SyntheticEvent, value: string) => {
    event.stopPropagation();
    setSearch(value);
  };

  const blogs: Array<{
    title: string;
    description: string;
    slug: string;
    date: string;
    categories: string[];
  }> = matchSorter(blogsProp, search, {
    keys: ["slug", "title", "categories", "tags", "description"],
  });

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
        <Typography variant="h4" gutterBottom>
          <b>Blogs</b>
        </Typography>
        <Box mb={2}>
          <TextField
            fullWidth
            variant="outlined"
            label="Search"
            value={search}
            color="secondary"
            onChange={handleChangeSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Divider />
        {blogs.map(({ title, description, slug, date, categories }) => (
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
              <Categories items={categories} onClick={handleCategoryClick} />
              <Typography color="grey.700">{date}</Typography>
              <Divider />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
