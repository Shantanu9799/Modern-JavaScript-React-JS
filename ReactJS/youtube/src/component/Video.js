import "./Video.css";

function Video({ source, title, channel = "santu", views, time }) {
  return (
    <div className="container">
      <div className="pic">
        <img src={source} alt="Opps!!" />
      </div>
      <div className="title">{title}</div>
      <div className="channelName">{channel}</div>
      <div className="details">
        {views} views <span>.</span> {time} ago
      </div>
    </div>
  );
}

export default Video;
