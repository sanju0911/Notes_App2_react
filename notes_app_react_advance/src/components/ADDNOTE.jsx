import React, { useContext, useState } from "react";
import styles from "../css/ADDNOTE.module.css";
import ReactDOM from "react-dom";
import NotesContext from "../contexts/NotesContext";

const ADDNOTE = () => {
  const { handleSubmit } = useContext(NotesContext);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const HandleName = (event) => {
    settitle(event.target.value);
  };
  const HandleDescription = (event) => {
    setdescription(event.target.value);
  };

  const Handledata = () => {
    handleSubmit(title, description);
    settitle("");
    setdescription("");
  };

  return ReactDOM.createPortal(
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
          onChange={HandleName}
          value={title}
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
          onChange={HandleDescription}
        />
      </div>

      <button className={styles.button} onClick={Handledata}>
        ADD
      </button>
    </div>,
    document.getElementById("addnote")
  );
};

export default ADDNOTE;
