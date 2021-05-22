import React, { useContext} from 'react';
import {AiTwotoneDelete} from 'react-icons/ai';
import './Note.styles.css';
import { MyContext } from '../../App.js';

function Note({id, text, date}){
    const {deleteNote} = useContext(MyContext);
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