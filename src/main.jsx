import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalCss } from "@/GlobalCss.js";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalCss />
    <App />
  </StrictMode>
);
