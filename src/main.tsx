import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@parte-ds/ui";
import { GlobalStyle } from "./GlobalStyles.tsx";
import { BrowserRouter } from "react-router-dom";
import { worker } from "./mock/worker";
console.log(import.meta.env.MODE);
if (import.meta.env.MODE === "development") {
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
