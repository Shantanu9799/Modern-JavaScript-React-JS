export type NoteProps = {
    id ?: number,
    text : string,
    priority ?: 'high' | 'medium'| 'low',   // by putting ? it shows that it's not mandatory
}