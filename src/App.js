import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import NoteList from "./components/NoteList/NoteList.component";
import SearchNote from "./components/SearchNote/SearchNote.component";

export const MyContext = React.createContext({})

export function App() {

  const [notes, setNotes] = useState([]);

  const [searchText, setsearchText] = useState("");
  const [toggleMode, SettoggleMode] = useState(false);

  const handleAddNote = (text) => {
    const date = new Date();

    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    setNotes((prevState) => [...prevState, newNote]);
  };

  const deleteNote = (id) => {
    const newDeleteNote = notes.filter((note) => note.id !== id);
    setNotes(newDeleteNote);
  };

  const handleSearch = (text) => {
    setsearchText(text);
  };

  useEffect(
    () => {
      const savedNotes = JSON.parse(localStorage.getItem('post-it-note'));
      
      if (savedNotes){
        setNotes(savedNotes);
      }
    }
    , []
  )
  useEffect(
    () => {
      localStorage.setItem('post-it-note', JSON.stringify(notes))
    }
    , [notes]
  )

  return (
    <div className={`${toggleMode && "darkmode"}`}>
      <div className="App">
        <div className="header">
          <h1>Just Do it!</h1>
          <button
            className="save"
            onClick={() => SettoggleMode(!toggleMode)}
            size="1.8em"
          >
            Toggle Mode
          </button>
        </div>
        <SearchNote handleSearch={handleSearch} />
        <MyContext.Provider value={{handleAddNote, deleteNote}}>
          <NoteList
            notes={notes.filter(({ text }) =>
              text.toLowerCase().includes(searchText)
            )}
            // handleAddNote={handleAddNote}
            // deleteNote={deleteNote}
          />
        </MyContext.Provider>
      </div>
    </div>
  );
}


