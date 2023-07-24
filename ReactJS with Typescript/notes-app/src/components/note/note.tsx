import "./note.css";

import { Color, NoteProps } from "./note-type";
import { Card } from "../card/card";

import { FaTrash, FaEdit } from 'react-icons/fa';

function Note(props: NoteProps) {
  return (
    <Card bgColor={props.priority && Color[props.priority]} height="5" padding="1">
      <div>
      <div>
        { props.text }
      </div>
      <div className="right-corner">
        <FaEdit style={{ marginRight:"1rem" }} onClick={()=>props.editNote(props.id)} />
        <FaTrash onClick={()=>props.deleteNote(props.id)} />
      </div>
      </div>
      
    </Card>
  );
}

export default Note;
