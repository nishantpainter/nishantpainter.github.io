"use client";

import React, { useState } from "react";
import { matchSorter } from "match-sorter";
import NextLink from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Categories } from "@/app/components";
import { useThemeContext } from "@/app/theme";
import { format } from "@/lib/utils/date";
import { styled } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";

const Link = styled(NextLink)({
  textDecoration: "none",
  color: "inherit",
});

type Blog = {
  title: string;
  description: string;
  slug: string;
  date: Date;
  categories: string[];
};

export default function Content({ blogs: blogsProp }: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isDarkMode } = useThemeContext();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleRedirect = (path: string) => () => {
    router.push(path);
  };

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleCategoryClick = (event: React.SyntheticEvent, value: string) => {
    event.preventDefault();
    event.stopPropagation();
    setSearch(value);
  };

  const blogs: Blog[] = search
    ? matchSorter(blogsProp, search, {
        keys: ["slug", "title", "categories", "tags", "description"],
      })
    : blogsProp;

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
            color="primary"
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
        {blogs.map(({ title, description, slug, date, categories }: Blog) => (
          <Box
            component="article"
            key={slug}
            className="pointer"
            // onClick={handleRedirect(`/blogs/${slug}`)}
            sx={{
              "& .title": {
                transition: "all 0.1s ease",
              },
              "&:hover": {
                "& .title": {
                  color: "primary.light",
                  fontWeight: "bold",
                },
              },
            }}
          >
            <Box component={Link} href={`/blogs/${slug}`}>
              <Box display="flex" flexDirection="column" key={slug} rowGap={2}>
                <Typography className="title" variant="h6" key={slug}>
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  color={`grey.${isDarkMode ? "600" : "900"}`}
                >
                  {description}
                </Typography>
                <Categories
                  items={categories}
                  onClick={handleCategoryClick}
                  darkMode={isDarkMode}
                />
                <Typography color="grey.700">{format(date)}</Typography>
                <Divider />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
