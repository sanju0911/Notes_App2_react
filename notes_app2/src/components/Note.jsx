import React from 'react';
import styles from './Note.module.css';

function Note({ title, description }) {
  return (
    <div className={styles.note}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Note;
