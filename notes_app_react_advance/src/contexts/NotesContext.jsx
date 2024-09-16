import { createContext } from "react";

const NotesContext = createContext({
  notes: [],
  filteredNotes: [],
});

export default NotesContext;
