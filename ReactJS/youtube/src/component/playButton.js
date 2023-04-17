import './PlayButton.css'

function PlayButton({message, children, onSmash}) {
    function handelClick() {
        onSmash();
    }
    return (
        <button onClick={handelClick}>{children}</button>
    )
}

export default PlayButton