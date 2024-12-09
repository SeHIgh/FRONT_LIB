import { createTheme, responsiveFontSizes } from "@mui/material";

export let theme = createTheme({
  typography: {
    fontFamily: '"galmuri9", sans-serif',
  },
  palette: {
    primary: {
      main: "#305673",
    },
    secondary: {
      main: "#708A9E",
    },
  },
});

theme = responsiveFontSizes(theme);
