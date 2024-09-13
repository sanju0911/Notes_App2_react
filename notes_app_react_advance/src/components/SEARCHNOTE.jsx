import React from "react";
import styles from "../css/SEARCHNOTE.module.css";
import { useState } from "react";

const SEARCHNOTE = ({ HandleSearch }) => {
  const [searchtitle, setsearchtitle] = useState("");

  const Handlesearchtitle = (event) => {
    setsearchtitle(event.target.value);
  };
  const Handlesearchbutton = () => {
    HandleSearch(searchtitle);
    setsearchtitle("");
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Enter title"
        className={styles.searchInput}
        onChange={Handlesearchtitle}
        value={searchtitle}
      />
      <button className={styles.searchButton} onClick={Handlesearchbutton}>
        Search
      </button>
    </div>
  );
};

export default SEARCHNOTE;
