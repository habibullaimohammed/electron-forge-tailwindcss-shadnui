import "./index.css";

import * as React from "react";
import { createRoot } from "react-dom/client";
import { Route, HashRouter as Router, Routes } from "react-router";

import App from "./app";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
