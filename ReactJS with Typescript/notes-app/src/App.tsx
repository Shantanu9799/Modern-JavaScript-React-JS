import './App.css';
import Note from './components/notes';

function App() {
  return (
    <div className="App">
      <h2>Notes app using React with typescript</h2>
      <Note text='Hello World'/>
      <Note text='Hello World' priority='high'/>
      <Note text='Hello World' priority='medium'/>
      <Note text='Hello World' priority='low'/>
    </div>
  );
}

export default App;
