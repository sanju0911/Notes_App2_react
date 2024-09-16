import React, { useState } from "react";
import styles from "../css/SEARCHNOTE.module.css";

const SearchNotes = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearching = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchButton = () => {
    handleSearch(search);
    setSearch("");
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Enter title"
        className={styles.searchInput}
        onChange={handleSearching}
        value={search}
      />
      <button className={styles.searchButton} onClick={handleSearchButton}>
        Search
      </button>
    </div>
  );
};

export default SearchNotes;
