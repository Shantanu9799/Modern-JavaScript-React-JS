import './App.css';
import Note from './components/note/note';
import AddNote from './components/add-note/add-note';
import { Notes } from './components/note/data';
import { useState } from 'react';
import { NoteType } from './components/note/note-type';

function App() {

  const [notes, setNotes] = useState(Notes);

  const addNote = (note: NoteType) => {
    setNotes([note,...notes]);
  }

  const editNote = (id: string) => {
    console.log('edited', id);
  }

  const deleteNote = (id: string) => {
    const index = notes.findIndex(note => note.id === id);
    const editedNotes = [...notes];
    editedNotes.splice(index, 1);
    setNotes(editedNotes);
  }

  return (
    <div className="App">
      <h2>Notes app using React with typescript</h2>
      <AddNote addNote = { addNote }/>
      <div>
        {
          notes.map((note) => <Note key={ note.id } id={ note.id } text={ note.text } priority={ note.priority } editNote={ editNote } deleteNote={ deleteNote } />)
        }
      </div>
    </div>
  );
}

export default App;
