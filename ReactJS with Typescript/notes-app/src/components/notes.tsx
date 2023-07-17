import './notes.css';

// passing props in typescript
type NoteProps = {
    text : string,
    priority ?: 'high' | 'medium'| 'low',   // by putting ? it shows that it's not mandatory
}

function Note(props: NoteProps) {
    return (
        <div className={`note ${ props.priority }`}>
            { props.text }
        </div>
    )
}

export default Note;