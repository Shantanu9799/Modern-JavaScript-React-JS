import "./note.css";

import { ColorDark, ColorLight, NoteProps } from "./note-type";
import { Card } from "../card/card";

import { FaTrash, FaEdit } from 'react-icons/fa';
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/theme";

function Note(props: NoteProps) {
  const theme = useContext(ThemeContext);
  return (
    <Card bgColor={theme==="dark" ? props.priority && ColorDark[props.priority] : props.priority && ColorLight[props.priority]} height="5" padding="1">
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
