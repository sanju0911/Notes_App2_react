import React from 'react';
import Note from './Note';
import styles from './NoteList.module.css';

function NotesList({ notes }) {
  return (
    <div className={styles.notesList}>
      {notes.map((note, index) => (
        <Note key={index} title={note.title} description={note.description} />
      ))}
    </div>
  );
}

export default NotesList;
