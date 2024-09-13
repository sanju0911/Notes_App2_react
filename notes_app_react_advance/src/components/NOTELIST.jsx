
import styles from "../css/NOTELIST.module.css";
import NOTE from "../components/NOTE";
const NOTELIST = ({ notes, Handledelete, Handleedit, searchnote }) => {
  if (searchnote) {
    return (
      <div className={styles.noteListContainer}>
        {Array.isArray(notes) ? (
          searchnote.map((note) => (
            <div key={note.title} className={styles.noteItem}>
              <NOTE
                id={note.id}
                title={note.title}
                description={note.description}
                Handledelete={Handledelete}
                Handleedit={Handledelete}
              ></NOTE>
            </div>
          ))
        ) : (
          <p>No notes available.</p>
        )}
      </div>
    );
  }
  return (
    <div className={styles.noteListContainer}>
      {Array.isArray(notes) ? (
        notes.map((note) => (
          <div key={note.title} className={styles.noteItem}>
            <NOTE
              id={note.id}
              title={note.title}
              description={note.description}
              Handledelete={Handledelete}
              Handleedit={Handledelete}
            ></NOTE>
          </div>
        ))
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
};

export default NOTELIST;
