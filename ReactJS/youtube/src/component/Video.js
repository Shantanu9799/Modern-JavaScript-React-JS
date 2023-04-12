import "./Video.css";  // importing css file

function Video({ source, title, channel = "Santu", views, time, verified = true }) { // de-structuring the object and used them as a variable
  let channelJSX;
  if(verified) {
    channelJSX = <div className="channelName">{channel}☑️</div>
  } else {
    channelJSX = <div className="channelName">{channel}</div>
  }
  return (
    <div className="container">
      <div className="pic">
        <img src={source} alt="Opps!!" />
      </div>
      <div className="title">{title}</div>
      {channelJSX}
      <div className="details">
        {views} views <span>.</span> {time} ago
      </div>
    </div>
  );
}

export default Video;
