import React from "react";
import ReactDOM from "react-dom/client";
import APP from "./App";
import { NotesProvider } from "./contexts/NotesContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotesProvider>
      <APP />
    </NotesProvider>
  </React.StrictMode>
);
