import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import * as MuiColors from "@mui/material/colors";

type CategoriesProps = {
  items: string[];
  colorful?: boolean;
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

  return (colors[hash] as any)[100];
}

export function Categories({ items = [], colorful = true }: CategoriesProps) {
  const getColorfulProps = (str: string) => {
    if (!colorful) return {};
    const backgroundColor = getRandomColor(str);

    return { sx: { backgroundColor } };
  };

  return (
    <Box display="flex" flexWrap="wrap" columnGap={1} rowGap={1}>
      {items.map((category) => (
        <Chip key={category} label={category} {...getColorfulProps(category)} />
      ))}
    </Box>
  );
}

export default Categories;
