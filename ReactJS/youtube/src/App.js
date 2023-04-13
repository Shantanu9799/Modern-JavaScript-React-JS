import "./App.css";
import Video from "./component/Video";
import videos from "./data/data";
function App() {
  return (
    //also we can make a object of all the properties and directly put it like <Video {...obj} />.
    <div className="App">
      {videos.map((videos) => (
        <Video
          title={videos.title}
          views={videos.views}
          source={videos.source}
          time={videos.time}
          verified={videos.verified}
        ></Video>
      ))}
    </div>
  );
}

export default App;
