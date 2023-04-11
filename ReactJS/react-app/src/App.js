// this is my first React App
/*
// we've to import the css file to use
import "./App.css"
// functional component
function App() {
  // it'll render to the ui
  // it's the JSX
  return <div className="App-header">Hello World</div>

}
// exporting the component as default so that we can use it any where
export default App;
*/

/*
// adding one component
import React from "react";
// import { ReactDOM } from "react";
import Video from "./components/Video"
function App() {
  // to add more line in the return statement it's a rule to have a parent segment for the childs. And in JSX there only can be one parent. We've to use the () for merging all the code
  return (
    <>
    <div>This is the App Component</div>
    <Video />
    </>
    )
}
export default App;
*/

/*
// adding more component
import React from "react";
// import { ReactDOM } from "react";
import {Video, Music} from "./components/Video"
import Thumb from "./components/Thumb";
function App() {
  // to add more line in the return statement it's a rule to have a parent segment for the childs. And in JSX there only can be one parent. We've to use the () for merging all the code
  return (
    <>
    <div>This is the App Component</div>
    <Video />
    <Music />
    <Thumb />
    </>
    )
}
export default App;
*/

/*
import Video from "./components/Video";
function App() {
  // to add more line in the return statement it's a rule to have a parent segment for the childs. And in JSX there only can be one parent. We've to use the () for merging all the code
  return (
    <>
    <div>This is the App Component</div>
    <Video />
    </>
    )
}
export default App;
// now the component tree changed
*/


