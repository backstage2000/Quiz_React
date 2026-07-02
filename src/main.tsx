import { createRoot } from "react-dom/client";

import "@style/index.css";

import { Router, Toaster } from "@config";

createRoot(document.getElementById("root")!).render(
  <>
    <Toaster />
    <Router />
  </>
);
