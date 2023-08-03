export type Priority = 'high' | 'medium'| 'low';

export type NoteProps = {
    id : string,
    text : string,
    priority ?: Priority,   // by putting ? it shows that it's not mandatory
    note : NoteType
}

export type NoteType = {
    id : string,
    text : string,
    priority : Priority,   // by putting ? it shows that it's not mandatory
}

export enum ColorLight {
    high = 'rgb(229, 72, 24)',
    medium = 'rgb(27, 229, 97)',
    low = 'rgb(53, 180, 243)'
}

export enum ColorDark {
    high = 'rgb(112, 30, 7)',
    medium = 'rgb(11, 100, 42)',
    low = 'rgb(15, 81, 114)'
}