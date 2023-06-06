import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function Logo({ darkMode }: { darkMode?: boolean }) {
  const borderColor = darkMode ? "white" : "black";

  return (
    <Box p={0.5} border={`3px solid ${borderColor}`} borderRadius={1}>
      <Typography variant="h5" letterSpacing={-0.3}>
        <b>NP</b>
      </Typography>
    </Box>
  );
}

export default Logo;
