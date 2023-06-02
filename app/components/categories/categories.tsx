import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

type CategoriesProps = {
  items: string[];
};

export function Categories({ items = [] }: CategoriesProps) {
  return (
    <Box display="flex" flexWrap="wrap" columnGap={1}>
      {items.map((category) => (
        <Chip key={category} label={category} />
      ))}
    </Box>
  );
}

export default Categories
