import React, { createContext, useState } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Note 1", description: "This is the first note." },
    { id: 2, title: "Note 2", description: "This is the second note." },
  ]);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [searchnote, setSearchNote] = useState("");

  const addNote = (title, description) => {
    const newNote = [...notes, { id: notes.length + 1, title, description }];
    setNotes(newNote);
    setIsPortalOpen(false);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const editNote = (id, newTitle, newDescription) => {
    const updatedNotes = notes.map((note) =>
      note.id === id
        ? { ...note, title: newTitle, description: newDescription }
        : note
    );
    setNotes(updatedNotes);
  };

  const searchNotes = (title) => {
    if (title === "") {
      setSearchNote("");
      return;
    }
    const filteredNotes = notes.filter((note) => note.title.includes(title));
    setSearchNote(filteredNotes);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        isPortalOpen,
        setIsPortalOpen,
        addNote,
        deleteNote,
        editNote,
        searchNotes,
        searchnote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
