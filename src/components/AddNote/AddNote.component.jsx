import React, {useState, useContext} from "react";
import './AddNote.styles.css';
import { MyContext } from '../../App.js';



function AddNote() {
  const {handleAddNote} = useContext(MyContext);

  const letterMax = 200;
  
  const [noteText, setNoteText] = useState('');

  const GrabNote = (event) => {
    event.preventDefault()  
    const todo = event.target.value;
    
    if (letterMax - todo.length >=0 && todo.length <= 200){
        setNoteText(todo);
    }    
  }
  
  const handleSubmit = () => {
    
    if(noteText.trim().length > 0){
      handleAddNote(noteText);
      setNoteText('');
    }
  }

  return (
    <div className='note addnote'>
      <textarea
        name="todo"
        rows="8"
        cols="10"
        value={noteText}
        placeholder="Type to add a note..."
        onChange={GrabNote}
      ></textarea>
      <div className='note-footer'>
        <small className='note-footer-small'>Characters left: {letterMax - noteText.length}</small>
        <button className="save" onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
}

export default AddNote;
