import styles from "../css/NOTELIST.module.css";

const NOTE = ({ id, title, description, handleDelete, handleEdit }) => {
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
