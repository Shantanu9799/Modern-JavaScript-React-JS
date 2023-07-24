import { useEffect, useState } from "react";
import "./add-note.css";
import { NoteType, Priority } from "../note/note-type";
import { v4 as uuidv4 } from "uuid";
import { Card } from "../card/card";

type addNotePops = {
  addNote: (note: NoteType) => void;
  editMode: boolean;
  noteToBeEditted: NoteType | null;
  updateNote: (updatedNote: NoteType) => void;
};

function AddNote(props: addNotePops) {
  const [text, setText] = useState("");

  const [priority, setPriority] = useState<Priority>("low");

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const setNoteContent = (note: NoteType) => {
    setText(note.text);
    setPriority(note.priority);
  };

  useEffect(() => {
    if (props.noteToBeEditted) {
      setNoteContent(props.noteToBeEditted);
    }
  }, [props.editMode, props.noteToBeEditted]);

  const handelClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (props.editMode) {
      props.noteToBeEditted && props.updateNote({
        text,
        priority,
        id: props.noteToBeEditted.id,
      });
    } else {
      props.addNote({
        text,
        priority,
        id: uuidv4(),
      });
    }

    setText("");
    setPriority("low");
  };

  const handelSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as Priority);
  };

  return (
    <Card bgColor="rgb(12,21,122)" height="5" padding="2">
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
          {props.editMode ? "UPDATE" : "ADD"}
        </button>
      </form>
    </Card>
  );
}

export default AddNote;
