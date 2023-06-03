import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function Logo() {
  return (
    <Box p={0.5} border="3px solid black" borderRadius={1}>
      <Typography variant="h5" letterSpacing={-0.3}>
        <b>NP</b>
      </Typography>
    </Box>
  );
}

export default Logo;
