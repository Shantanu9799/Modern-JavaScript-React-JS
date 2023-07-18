import './App.css';
import Note from './components/note/note';
import { Notes } from './components/note/data';

function App() {
  return (
    <div className="App">
      <h2>Notes app using React with typescript</h2>
      <div>
        {
          Notes.map((note) => <Note key={ note.id } text={ note.text } priority={ note.priority } />)
        }
      </div>
    </div>
  );
}

export default App;
