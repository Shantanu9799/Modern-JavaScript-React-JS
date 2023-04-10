/*
// creating an another component inside the a component folder
function Video() {
    return <div>This is the Video Component</div>
}
export default Video;
// to use this Video component in the app component we've to import this in the app component.
*/

/*
//adding multiple component in same js file and exporting them differently
function Video() {
    return <div>This is the Video Component</div>
}

function Music() {
    return <div>This is Music Component under the video component</div>
}

export {Video, Music}
// it's not allwoed to export more than one component to export default.
/*
export default Video;
export default Music;
*/
// it'll give an error

// now we want to do some changes in the component tree
// we're going to put the Thumb component inside the Video Component
import Thumb from "./Thumb";
function Video() {
  return (
    <>
      <div>This is the Video Component</div>
      <Thumb />
    </>
  );
}
export default Video;
