import { createTheme } from "@mui/material";
import { colors } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.lime[100],
    },
  },
  typography: {
    fontSize: 12,
  },
});

export { theme };
