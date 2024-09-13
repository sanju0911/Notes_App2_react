import { useState } from "react";
import ADDNOTE from "./components/ADDNOTE";
import NOTELIST from "./components/NOTELIST";
import SEARCHNOTE from "./components/SEARCHNOTE";

const APP = () => {
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
  };

  const Handledelete = (id) => {
    const newnote = notes.filter((note) => {
      if (id === note.id) {
        return false;
      }
      return true;
    });
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

    const newnote = notes.filter((note) => {
      if (title === note.title) {
        return true;
      }
      return false;
    });
    setsearchnote(newnote);
  };
  return (
    <div>
      <ADDNOTE Handlesubmit={Handlesubmit}></ADDNOTE>

      <SEARCHNOTE HandleSearch={HandleSearch}></SEARCHNOTE>
      <h4>total notes :{notes.length}</h4>
      <h4>search notes :{searchnote.length}</h4>
      <NOTELIST
        notes={notes}
        Handledelete={Handledelete}
        Handleedit={Handleedit}
        searchnote={searchnote}
      ></NOTELIST>
    </div>
  );
};

export default APP;
