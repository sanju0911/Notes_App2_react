import styles from "../css/NOTELIST.module.css";
import NOTE from "../components/NOTE";
import { NotesContext } from "../contexts/NotesContext";

import { useContext } from "react";

const NOTELIST = ({ Handledelete, Handleedit }) => {
  const { notes, searchnote } = useContext(NotesContext);

  const displayedNotes = searchnote.length ? searchnote : notes;

  return (
    <div className={styles.noteListContainer}>
      {Array.isArray(displayedNotes) && displayedNotes.length > 0 ? (
        displayedNotes.map((note) => (
          <div key={note.id} className={styles.noteItem}>
            <NOTE
              id={note.id}
              title={note.title}
              description={note.description}
              Handledelete={Handledelete}
              Handleedit={Handleedit}
            />
          </div>
        ))
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
};

export default NOTELIST;
