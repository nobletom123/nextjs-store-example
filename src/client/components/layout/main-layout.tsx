import { FunctionComponent } from "react";
import {
  Toolbar,
  AppBar,
  Box,
  Typography,
  Badge,
  IconButton,
  Stack,
  Link,
  colors,
} from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import { useProfileContext } from "../../contexts/profile-context";
import { useRouter } from "next/dist/client/router";

const MainLayout: FunctionComponent = ({ children }) => {
  const { basket = [], user } = useProfileContext();
  const { push } = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: colors.lime[100],
        }}
        position="fixed"
      >
        <Toolbar>
          <Link href="/" underline="none" variant="button" color="secondary">
            Store Example
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={3} alignItems="center">
            <Link
              href="/products"
              underline="none"
              variant="button"
              color="secondary"
              data-cy="main-layout-products"
            >
              Products
            </Link>
            <IconButton
              aria-label="header-basket"
              onClick={() => push("/account/basket")}
              color="secondary"
            >
              <Badge badgeContent={basket.length} color="error">
                <ShoppingBasket />
              </Badge>
            </IconButton>
            <Link
              underline="none"
              href="/register"
              variant="button"
              color="secondary"
            >
              Register
            </Link>
            <Link
              underline="none"
              href="/login"
              variant="button"
              color="secondary"
            >
              Login
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
      <main>{children}</main>
    </Box>
  );
};

export { MainLayout };
