import React, { useContext } from "react";
import { NotesContext } from "./contexts/NotesContext";
import ADDNOTE from "./components/ADDNOTE";
import NOTELIST from "./components/NOTELIST";
import SEARCHNOTE from "./components/SEARCHNOTE";

const APP = () => {
  const {
    notes,
    isPortalOpen,
    setIsPortalOpen,
    addNote,
    deleteNote,
    editNote,
    searchNotes,
    searchnote,
  } = useContext(NotesContext);

  return (
    <div>
      {!isPortalOpen && (
        <div className="centered-button">
          <button onClick={() => setIsPortalOpen(true)}>
            Click to Add Notes
          </button>
        </div>
      )}
      {isPortalOpen && <ADDNOTE Handlesubmit={addNote} />}

      <SEARCHNOTE HandleSearch={searchNotes} />

      <h4>Total notes: {notes.length}</h4>
      <h4>Search notes: {searchnote.length}</h4>

      <NOTELIST Handledelete={deleteNote} Handleedit={editNote} />
    </div>
  );
  // return (
  //   <NotesContext.Provider>
  //     <>
  //       <ADDNOTE />
  //       <SEARCHNOTE />
  //       <NOTELIST />
  //       <h4>Total notes: {notes.length}</h4>
  //       <h4>Search notes: {searchnote.length}</h4>
  //     </>
  //   </NotesContext.Provider>
  // );
};

export default APP;
