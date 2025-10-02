import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Router } from "react-router";
import { RouterProvider } from "react-router";
import "./index.css";
import routes from "./lib/navigator";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
