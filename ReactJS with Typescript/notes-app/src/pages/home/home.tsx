import './home.css';
import Note from '../../components/note/note';
import AddNote from '../../components/add-note/add-note';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme/theme';
import { StateContext } from '../../context/state/state';

function Home() {
  const theme  = useContext(ThemeContext);

  const { state } = useContext(StateContext);

  return (
     <div className={`home ${theme}`}>
      <h2>Notes app using React with typescript</h2>
      <AddNote />
      <div>
        {
          state.notes.map((note) => <Note key={ note.id } id={ note.id } text={ note.text } priority={ note.priority } note={note} />)
        }
      </div>
    </div>
  );
}

export default Home;
