import { FunctionComponent } from "react";
import { Toolbar, AppBar, Box, Typography } from "@mui/material";

const MainLayout: FunctionComponent = ({ children }) => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography>Test</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
      <main>{children}</main>
    </Box>
  );
};

export { MainLayout };
