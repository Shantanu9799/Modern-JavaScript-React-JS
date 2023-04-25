import { useState } from 'react';
import './PlayButton.css'

function PlayButton({children, onPlay, onPause}) {
    const [playingStatus, setPlayingStatus] = useState(false);
    function handelClick() {
        if(playingStatus) onPause();
        else onPlay();

        setPlayingStatus(!playingStatus);
    }
    return (
        <button onClick={handelClick}>{children} : {playingStatus ? '⏸️' : '⏯️'}</button>
    )
}

export default PlayButton;