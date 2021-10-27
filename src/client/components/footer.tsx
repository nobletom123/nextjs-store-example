import { Grid, Container, Stack, Link, Divider } from "@mui/material";
import { Box } from "@mui/system";

const Footer = () => (
  <Box sx={{ height: "30vh", backgroundColor: "primary.main" }}>
    <Container sx={{ height: "inherit" }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" />}
        justifyContent="space-around"
        sx={{ height: "inherit", pt: "25px" }}
      >
        <Stack>
          <Link href="/" color="secondary">
            Home
          </Link>
          <Link href="/products" color="secondary">
            Products
          </Link>
        </Stack>
        <Stack>
          <Link href="/register" color="secondary">
            Register
          </Link>
          <Link href="/login" color="secondary">
            Login
          </Link>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export { Footer };
