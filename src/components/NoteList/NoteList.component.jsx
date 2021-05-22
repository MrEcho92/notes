import React from "react";
import Note from "../Note/Note.component";
import AddNote from '../AddNote/AddNote.component';
import { nanoid } from "nanoid";
import "./NoteList.styles.css";

function NoteList({ notes }) {
  return (
    <div className="note-list">
      {notes.map(({...otherprops}) => (
        <Note key={nanoid()} {...otherprops}/>
      ))}
      <AddNote/>
    </div>
  );
}

export default NoteList;
