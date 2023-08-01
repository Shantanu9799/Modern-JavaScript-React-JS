import { useContext, useEffect, useState } from "react";
import "./add-note.css";
import { NoteType, Priority } from "../note/note-type";
import { v4 as uuidv4 } from "uuid";
import { Card } from "../card/card";
import { ThemeContext } from "../../context/theme/theme";
import { StateContext } from "../../context/state/state";
import { ADD_NOTE, UPDATE_NOTE, SET_EDIT_MODE } from "../../actions";

type addNotePops = {
  
};

function AddNote(props: addNotePops) {
  const [text, setText] = useState("");

  const [priority, setPriority] = useState<Priority>("low");

  const { state, dispatch } = useContext(StateContext);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const setNoteContent = (note: NoteType) => {
    setText(note.text);
    setPriority(note.priority);
  };

  useEffect(() => {
    if (state.noteToBeEditted && state.editMode) {
      setNoteContent(state.noteToBeEditted);
    }
  }, [state.editMode, state.noteToBeEditted]);

  const handelClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (state.editMode) {
      state.noteToBeEditted && dispatch({type: UPDATE_NOTE, payload: {
        text,
        priority,
        id: state.noteToBeEditted.id,
      }});
      dispatch({type: SET_EDIT_MODE, payload: false});
    } else {
      dispatch({type: ADD_NOTE, payload: {
        text,
        priority,
        id: uuidv4(),
      }});
    }

    setText("");
    setPriority("low");
  };

  const handelSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as Priority);
  };

  const theme = useContext(ThemeContext);

  return (
    <Card bgColor={theme==="light" ? "rgb(12,21,122)" : "rgb(7,27,250)"} height="5" padding="2">
      <form className="add-note">
        <input
          type="text"
          onChange={handelChange}
          value={text}
          placeholder="Enter your card name here"
        />
        <select onChange={handelSelect} value={priority}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button onClick={handelClick}>
          {state.editMode ? "UPDATE" : "ADD"}
        </button>
      </form>
    </Card>
  );
}

export default AddNote;