import { useState } from "react";
import ADDNOTE from "./components/ADDNOTE";
import NOTELIST from "./components/NOTELIST";
import SEARCHNOTE from "./components/SEARCHNOTE";

const APP = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [notes, setnotes] = useState([
    {
      id: 1,
      title: "Note 1",
      description: "This is the first note.",
    },
    {
      id: 2,
      title: "Note 2",
      description: "This is the second note.",
    },
  ]);
  const [searchnote, setsearchnote] = useState("");

  const Handlesubmit = (title, description) => {
    const newnote = [
      ...notes,
      { id: notes.length + 1, title: title, description: description },
    ];
    setnotes(newnote);
    setIsPortalOpen(false);
  };

  const Handledelete = (id) => {
    const newnote = notes.filter((note) => id !== note.id);
    setnotes(newnote);
  };

  const Handleedit = (id, description) => {
    console.log(id, description);
  };

  const HandleSearch = (title) => {
    if (title === "") {
      setsearchnote("");
      return;
    }
    const newnote = notes.filter((note) => title === note.title);
    setsearchnote(newnote);
  };

  return (
    <div>
      {!isPortalOpen && (
        <div className="centered-button">
          <button onClick={() => setIsPortalOpen(true)}>
            Click to Add Notes
          </button>
        </div>
      )}
      {isPortalOpen && <ADDNOTE Handlesubmit={Handlesubmit} />}

      <SEARCHNOTE HandleSearch={HandleSearch} />

      <h4>Total notes: {notes.length}</h4>
      <h4>Search notes: {searchnote.length}</h4>

      <NOTELIST
        notes={searchnote.length ? searchnote : notes}
        Handledelete={Handledelete}
        Handleedit={Handleedit}
      />
    </div>
  );
};

export default APP;
