import React from 'react';
import {AiTwotoneDelete} from 'react-icons/ai';
import './Note.styles.css';

function Note({id, text, date, deleteNote }){
    return (
        <div className='note'>
            <p>{text}</p>
            <div className='note-footer'>
                <small>{date}</small>
                <AiTwotoneDelete onClick={() => deleteNote(id)} className='delete-icon' size='1.3rem'/>
            </div>
        </div>
    )
}



export default Note;