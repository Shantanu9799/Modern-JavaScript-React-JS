export type Priority = 'high' | 'medium'| 'low';

export type NoteProps = {
    text : string,
    priority ?: Priority,   // by putting ? it shows that it's not mandatory
}

export type NoteType = {
    id : string,
    text : string,
    priority : Priority,   // by putting ? it shows that it's not mandatory
}