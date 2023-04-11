import "./App.css"
import Video from "./component/Video";

function App() {
  return (
    <div className="App">
      <Video source = "https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124" title="React JS Tutorial" views="100K" time="1 Year" />
      <Video source = "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.jpg" title="JAVA Tutorial"  views="10M" time="2 Months" />
      <Video source = "https://www.freecodecamp.org/news/content/images/2021/07/mysql.png" title="MySql Tutorial"  views="10K" time="11 Months" />
    </div>
  );
}

export default App;
