import React from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import * as MuiColors from "@mui/material/colors";
import type { Color } from "@mui/material";
import { useThemeContext } from "@/app/theme";

type CategoriesProps = {
  items: string[];
  colorful?: boolean;
  onClick?: (event: React.SyntheticEvent, value: string) => any;
  darkMode?: boolean;
};

const colors = Object.values(MuiColors);

function getRandomColor(str: string) {
  if (!str) return;
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }

  hash = ((hash % colors.length) + colors.length) % colors.length;

  return colors[hash] as Color;
}

export function Categories({
  items = [],
  colorful = true,
  onClick,
  darkMode,
}: CategoriesProps) {
  const getColorfulProps = (str: string) => {
    if (!colorful) return {};
    const backgroundColor = getRandomColor(str);

    return {
      sx: { backgroundColor: backgroundColor?.[darkMode ? 900 : 100] },
    };
  };

  return (
    <Box display="flex" flexWrap="wrap" columnGap={1} rowGap={1}>
      {items.map((category) => (
        <Chip
          clickable
          key={category}
          label={category}
          onClick={(e) => onClick?.(e, category)}
          color="default"
          {...getColorfulProps(category)}
        />
      ))}
    </Box>
  );
}

export default Categories;
