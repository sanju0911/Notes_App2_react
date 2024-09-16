import NOTE from "./NOTE";
import styles from "../css/NOTELIST.module.css";
import { useContext } from "react";
import NotesContext from "../contexts/NotesContext";

const NOTELIST = ({ handleDelete, handleEdit }) => {
  const { notes, filteredNotes } = useContext(NotesContext);

  // Determine which notes to display
  const displayArray = filteredNotes.length > 0 ? filteredNotes : notes;

  return (
    <div className={styles.noteListContainer}>
      {Array.isArray(displayArray) && displayArray.length > 0 ? (
        displayArray.map((note) => (
          <NOTE
            key={note.id}
            id={note.id}
            title={note.title}
            description={note.description}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
};

export default NOTELIST;
