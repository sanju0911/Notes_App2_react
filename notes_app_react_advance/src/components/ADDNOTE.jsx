import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "../css/ADDNOTE.module.css";

const AddNoteForm = ({
  title,
  setTitle,
  description,
  setDescription,
  onSubmit,
}) => {
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  return (
    <div className={styles.container}>
      <div className={styles.formGroup}>
        <label htmlFor="noteName" className={styles.label}>
          NAME:
        </label>
        <input
          type="text"
          id="noteName"
          placeholder="Enter your title"
          className={styles.input}
          value={title}
          onChange={handleTitleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="noteDescription" className={styles.label}>
          DESCRIPTION:
        </label>
        <input
          type="text"
          id="noteDescription"
          placeholder="Enter your description"
          className={styles.input}
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>

      <button className={styles.button} onClick={onSubmit}>
        ADD
      </button>
    </div>
  );
};

const ADDNOTE = ({ Handlesubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (title.trim() && description.trim()) {
      Handlesubmit(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.portalContainer}>
      <div className={styles.portalContent}>
        <AddNoteForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          onSubmit={handleSubmit}
        />
      </div>
      <div className={styles.overlay} onClick={() => setTitle("")}></div>
    </div>,
    document.getElementById("addnote")
  );
};

export default ADDNOTE;
