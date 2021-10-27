import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Box } from "@mui/system";
import { Send } from "@mui/icons-material";
import { FunctionComponent } from "react";
import { Container, Toolbar, Typography } from "@material-ui/core";

type AdminMenuItemType = {
  to: string;
  name: string;
}[];

const menuItems: AdminMenuItemType = [
  {
    name: "Products",
    to: "/admin/products",
  },
  {
    name: "Orders",

    to: "/admin/orders",
  },
  {
    name: "Users",
    to: "/admin/users",
  },
];

const drawerWidth = 200;

const AdminLayout: FunctionComponent = ({ children }) => {
  return (
    <Box>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            padding: "20px",
          },
        }}
      >
        <Toolbar />
        <Typography>Admin Section</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          aria-labelledby="nested-list-subheader"
        >
          {menuItems.map(({ to, name }) => (
            <ListItemButton key={`${to}-${name}`}>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box sx={{ ml: `${drawerWidth}px`, p: "24px" }}>{children}</Box>
    </Box>
  );
};

export { AdminLayout };
