import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./common/theme";
import { ThemeProvider } from "@mui/material";
import AppProvider from "./common/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <CssBaseline />
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </AppProvider>
);
