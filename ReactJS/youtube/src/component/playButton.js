import './PlayButton.css'

function PlayButton() {
    function handelClick() {
        console.log("Play")
    }
    return (
        <button onClick={handelClick}>Play</button>
    )
}

export default PlayButton