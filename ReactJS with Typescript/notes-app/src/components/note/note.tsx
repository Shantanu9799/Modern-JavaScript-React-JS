import "./note.css";

import { ColorDark, ColorLight, NoteProps, NoteType } from "./note-type";
import { Card } from "../card/card";

import { FaTrash, FaEdit } from 'react-icons/fa';
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/theme";
import { StateContext } from "../../context/state/state";
import { DELETE_NOTE, SET_EDIT_MODE, SET_NOTE_FOR_EDIT } from "../../actions";

function Note(props: NoteProps) {
  const theme = useContext(ThemeContext);
  const { dispatch } = useContext(StateContext);

  const editNote = (note: NoteType) => {
    dispatch({type: SET_EDIT_MODE, payload:true});
    dispatch({type: SET_NOTE_FOR_EDIT, payload:note});
  }

  return (
    <Card bgColor={theme==="dark" ? props.priority && ColorDark[props.priority] : props.priority && ColorLight[props.priority]} height="5" padding="1">
      <div>
      <div>
        { props.text }
      </div>
      <div className="right-corner">
        <FaEdit style={{ marginRight:"1rem" }} onClick={()=>editNote(props.note)} />
        <FaTrash onClick={()=>dispatch({type: DELETE_NOTE, payload: props.id})} />
      </div>
      </div>  
    </Card>
  );
}

export default Note;
