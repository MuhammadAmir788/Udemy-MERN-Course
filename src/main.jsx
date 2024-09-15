import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FormValidation from "./Pages/FormValidation.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormValidation />
    <App />
  </StrictMode>
);
