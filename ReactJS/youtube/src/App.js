import "./App.css";
import Counter from "./component/Counter";
import Video from "./component/Video";
import PlayButton from "./component/playButton";
import videos from "./data/data";
import AddVideo from "./component/AddVideo";
function App() {
  return (
    //also we can make a object of all the properties and directly put it like <Video {...obj} />.
    <div className="App">
    <AddVideo></AddVideo>
      {videos.map((videos) => (
        <Video
          id={videos.id}
          title={videos.title}
          views={videos.views}
          source={videos.source}
          time={videos.time}
          verified={videos.verified}
        >
          <PlayButton
            onPlay={() => console.log("Play", videos.title)}
            onPause={() => console.log("Pause", videos.title)}
          >
            Play
          </PlayButton>
        </Video>
      ))}
      <Counter></Counter>
    </div>
  );
}

export default App;
