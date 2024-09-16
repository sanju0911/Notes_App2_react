import { useState } from "react";
import ADDNOTE from "./components/ADDNOTE";
import NOTELIST from "./components/NOTELIST";
import SEARCHNOTE from "./components/SEARCHNOTE";
import styles from "./App.module.css";
import NotesContext from "./contexts/NotesContext";

const APP = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Note 1",
      description: "This is the first note.",
    },
    {
      id: 2,
      title: "Note 2",
      description: "This is the second note.",
    },
  ]);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState([]);

  const handleSubmit = (title, description) => {
    const newNote = [
      ...notes,
      { id: notes.length + 1, title: title, description: description },
    ];
    setNotes(newNote);
    setFilteredNotes(newNote);
    setIsPortalOpen(false);
  };

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
  };

  const handleEdit = (id, description) => {
    console.log(id, description);
  };

  const handleSearch = (title) => {
    if (title === "") {
      setFilteredNotes("");
      return;
    }

    const filtered = notes.filter((note) =>
      note.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  const handlePortal = () => {
    setIsPortalOpen(!isPortalOpen);
  };

  return (
    <NotesContext.Provider value={{ notes, filteredNotes }}>
      <div>
        {!isPortalOpen && (
          <button className={styles.BUTTONCENTER} onClick={handlePortal}>
            ADD NOTES
          </button>
        )}
        {isPortalOpen && <ADDNOTE Handlesubmit={handleSubmit} />}

        <SEARCHNOTE handleSearch={handleSearch} />
        <h4>Total notes: {notes.length}</h4>
        <h4>Search results: {filteredNotes.length}</h4>
        <NOTELIST handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>
    </NotesContext.Provider>
  );
};

export default APP;
