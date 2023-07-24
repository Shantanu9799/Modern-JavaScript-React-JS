import { Color, NoteProps } from "./note-type";
import { Card } from "../card/card";

function Note(props: NoteProps) {
  return (
    <Card bgColor={props.priority && Color[props.priority]} height="3" padding="1">
      <div>
        { props.text }
      </div>
    </Card>
  );
}

export default Note;
