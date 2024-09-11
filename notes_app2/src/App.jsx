import React, { useState } from 'react';
import NotesList from './components/NotesList';
import AddNoteModal from './components/AddNoteModal';
import styles from './App.module.css';


function App() {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddNote = (title, description) => {
    setNotes([...notes, { title, description }]);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.app}>
      <h1>Notes Application</h1>
      <button onClick={() => setIsModalOpen(true)}>Add Notes</button>
      {isModalOpen && <AddNoteModal onAdd={handleAddNote} onCancel={handleCancel} />}
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
