import React from 'react';
import Note from './Note';
import styles from './NoteList.module.css';

function NotesList({ notes, onDeleteNote }) {
  return (
    <div className={styles.notesList}>
      {notes.map((note, index) => (
        <Note
          key={index}
          title={note.title}
          description={note.description}
          onDelete={() => onDeleteNote(index)} 
        />
      ))}
      <button className={styles.addButton} onClick={() => console.log("Add new note")}>
        Add Note
      </button>
    </div>
  );
}

export default NotesList;
