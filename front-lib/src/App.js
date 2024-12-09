import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import Router from "./Router";
import { theme } from "./global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
