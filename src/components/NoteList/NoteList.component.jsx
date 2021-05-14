import React from "react";
import Note from "../Note/Note.component";
import AddNote from '../AddNote/AddNote.component';
import { nanoid } from "nanoid";
import "./NoteList.styles.css";

function NoteList({ notes, handleAddNote, deleteNote }) {
  return (
    <div className="note-list">
      {notes.map(({...otherprops}) => (
        <Note key={nanoid()} {...otherprops} deleteNote={deleteNote} />
      ))}
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  );
}

export default NoteList;
