import { useContext } from "react";
import styles from "../css/NOTELIST.module.css";
import NotesContext from "../contexts/NotesContext";

const NOTE = ({ id, title, description }) => {
  const { handleDelete, handleEdit } = useContext(NotesContext);
  const HandleEditClick = () => {
    handleEdit(id, description);
  };

  const HandleDeleteClick = () => {
    handleDelete(id);
  };

  return (
    <div className={styles.noteItem}>
      <h2 className={styles.noteTitle}>{title}</h2>
      <p className={styles.noteDescription}>{description}</p>
      <div className={styles.buttonGroup}>
        <button className={styles.editButton} onClick={HandleEditClick}>
          Edit
        </button>
        <button className={styles.deleteButton} onClick={HandleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NOTE;
