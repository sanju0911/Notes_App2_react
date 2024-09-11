import React from 'react';
import styles from './Note.module.css';

function Note({ title, description, onDelete }) {
  return (
    <div className={styles.note}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className={styles.deleteButton} onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Note;
