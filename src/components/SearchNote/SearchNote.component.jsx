import React from "react";
import { MdSearch } from "react-icons/md";
import "./SearchNote.styles.css";

function SearchNote({handleSearch}) {

  const addSearchText = (event)=>{
    const text = event.target.value;
    handleSearch(text.trim().toLowerCase())
  }

  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input name="search" type="search" onChange={addSearchText} placeholder='Search your notes...'/>
    </div>
  );
}

export default SearchNote;
