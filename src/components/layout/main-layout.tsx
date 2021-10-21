import { FunctionComponent } from "react";
import {
  Toolbar,
  AppBar,
  Box,
  Typography,
  Badge,
  IconButton,
  Stack,
} from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import { useProfileContext } from "../../contexts/profile-context";
import { useRouter } from "next/dist/client/router";

const MainLayout: FunctionComponent = ({ children }) => {
  const { basket = [] } = useProfileContext();
  const { push } = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        position="fixed"
      >
        <Toolbar>
          <Typography>Test</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            aria-label="header-basket"
            onClick={() => push("/account/basket")}
          >
            <Badge badgeContent={basket.length} color="error">
              <ShoppingBasket />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
      <main>{children}</main>
    </Box>
  );
};

export { MainLayout };
