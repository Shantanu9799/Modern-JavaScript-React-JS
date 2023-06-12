import "./AddVideo.css"
import { useState } from "react";
function AddVideo({addVideos}) {
    const [videos, setVideos] = useState({
        time: "11 months",
        verified: false,
    });
    function handelSubmit(e) {
        e.preventDefault();
        addVideos(videos);
    }
    function handelChange(e) {
        console.log(e.target.name, e.target.value)
        setVideos({...videos, 
            [e.target.name] : e.target.value})
    }

    return (
        <form>
            <input type="text" name="title" onChange={handelChange} placeholder="Title of the Video"></input>
            {videos.title}
            <input type="text" name="views" onChange={handelChange} placeholder="Views of the Video"></input>
            <button onClick={handelSubmit}
            >Add Video</button>
        </form>
    )
}

export default AddVideo;