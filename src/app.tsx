// # src/app.tsx

import { Menu } from "lucide-react";
import "./index.css"; // import css

import * as React from "react";
import { createRoot } from "react-dom/client";
import { Button } from "./components/ui/button";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <h1 className="font-bold text-2xl underline text-red-700">
      Hello react <Menu />
      <Button>Hi</Button>
    </h1>
  </React.StrictMode>
);
