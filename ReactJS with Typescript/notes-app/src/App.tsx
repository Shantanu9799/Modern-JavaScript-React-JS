import { useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/theme/theme";
import Home from "./pages/home/home";
import Switch from "react-switch";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState("light");

  const [checked, setChecked] = useState(false);

  const changeHandeler = (check: boolean) => {
    setChecked(!checked);
    if (check) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    console.log(checked, check);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Switch className="react-switch" onChange={changeHandeler} checked={checked} uncheckedIcon={<FaMoon size={22} style={{ color:"white", position:"absolute", right: "4", top:"2" }}></FaMoon>} checkedIcon={<FaSun size={22} style={{ color:"F0DE36", position:"absolute", left: "4", top:"2" }}></FaSun>} offColor="#333" onColor="#1C0C5B" width={70}></Switch>
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
