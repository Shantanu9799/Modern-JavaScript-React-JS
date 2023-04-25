import "./Video.css";  // importing css file

function Video({id, source, title, channel = "Santu", views, time, verified = true , children}) { // de-structuring the object and used them as a variable
  return (
    <div className="container">
      <div className="pic">
        <img src={source} alt="Opps!!" />
      </div>
      <div className="title">{title}</div>
      <div className="channelName">{channel} {verified && '☑️'}</div>
      <div className="details">
        {views} views <span>.</span> {time} ago
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Video;
