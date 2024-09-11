import React, { useState } from 'react';
import NotesList from './components/NotesList';
import AddNoteModal from './components/AddNoteModal';
import styles from './App.module.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (note) => {
    setNotes([...notes, note]);
    setIsModalOpen(false);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.app}>
      <h1>Notes Application</h1>
      <NotesList notes={notes} onDeleteNote={deleteNote} />
      <button className={styles.addButton} onClick={() => setIsModalOpen(true)}>
        Add Notes
      </button>
      {isModalOpen && (
        <AddNoteModal
          onAdd={addNote}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
