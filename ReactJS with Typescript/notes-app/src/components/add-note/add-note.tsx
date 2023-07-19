import { useState } from "react";
import "./add-note.css";
import { NoteType, Priority } from '../note/note-type';
import {v4 as uuidv4} from "uuid";

type addNotePops = {
  addNote : (note : NoteType) => void;
}

function AddNote(props : addNotePops) {

  const [text, setText] = useState("");

  const [priority, setPriority] = useState<Priority>("low");

  const handelChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handelClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.addNote({
      text,
      priority,
      id:uuidv4(),
    })
    setText('');
    setPriority('low');
  };

  const handelSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as Priority);
  }

  return (
    <div>
      <form className="add-note">
        <input type="text" onChange={handelChange} value={text}/>
        <select onChange={handelSelect} value={priority}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button onClick={handelClick}>ADD</button>
      </form>
    </div>
  );
}

export default AddNote;
