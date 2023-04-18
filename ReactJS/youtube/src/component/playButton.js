import './PlayButton.css'

function PlayButton({children, onPlay, onPause}) {
    let playingStatus = false;
    function handelClick() {
        if(playingStatus) onPause();
        else onPlay();

        playingStatus = !playingStatus;
    }
    return (
        <button onClick={handelClick}>{children}</button>
    )
}

export default PlayButton