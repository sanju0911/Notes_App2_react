import styles from "../css/NOTELIST.module.css";

const NOTE = ({ id, title, description, Handledelete, Handleedit }) => {
  const Handleeditbutton = () => {
    Handleedit(id);
  };
  const Handledeletebutton = () => {
    Handledelete(id);
  };

  return (
    <>
      <h1 className={styles.noteName}>{title}</h1>
      <h2 className={styles.noteDescription}>{description}</h2>
      <button className={styles.editButton} onClick={Handleeditbutton}>
        Edit
      </button>
      <button className={styles.deleteButton} onClick={Handledeletebutton}>
        Delete
      </button>
    </>
  );
};

export default NOTE;
