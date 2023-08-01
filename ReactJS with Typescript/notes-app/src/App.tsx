import { useReducer, useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/theme/theme";
import Home from "./pages/home/home";
import Switch from "react-switch";
import { FaSun, FaMoon } from "react-icons/fa";
import { StateContext, StateType } from "./context/state/state";
import { Notes } from "./components/note/data";
import { SET_EDIT_MODE, SET_NOTE_FOR_EDIT, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "./actions";



function App() {
  const [theme, setTheme] = useState("light");

  const [checked, setChecked] = useState(false);

  const [state, dispatch] = useReducer((state:StateType, action:{ type : string, payload :any }) =>{
    switch (action.type) { 
      case SET_EDIT_MODE :
        return { ...state, editMode: action.payload };
      case SET_NOTE_FOR_EDIT :
          return { ...state, noteToBeEditted: action.payload };
      case ADD_NOTE :
        return { ...state, notes: [action.payload, ...state.notes] };
      case DELETE_NOTE :
        const index = state.notes.findIndex(note => note.id === action.payload);
        const editedNotes = [...state.notes];
        editedNotes.splice(index, 1);
        return {...state, notes:editedNotes};
      case UPDATE_NOTE:
        const indexUpdated = state.notes.findIndex(note => note.id === action.payload.id);
        const editedNotesUpdated = [...state.notes];
        editedNotesUpdated.splice(indexUpdated, 1, action.payload);
        return {...state, notes:editedNotesUpdated};
      default :
        return state;
    }
  }, {notes: Notes, editMode: false, noteToBeEditted:null});

  const changeHandeler = (check: boolean) => {
    setChecked(!checked);
    if (check) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <StateContext.Provider value = {{ state, dispatch }}>
    <ThemeContext.Provider value={theme}>
      <Switch className="react-switch" onChange={changeHandeler} checked={checked} uncheckedIcon={<FaMoon size={22} style={{ color:"white", position:"absolute", right: "4", top:"2" }}></FaMoon>} checkedIcon={<FaSun size={22} style={{ color:"F0DE36", position:"absolute", left: "4", top:"2" }}></FaSun>} offColor="#333" onColor="#1C0C5B" width={60}></Switch>
      <Home />
    </ThemeContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
