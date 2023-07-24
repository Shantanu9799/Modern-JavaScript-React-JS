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

export enum Color {
    high = 'rgb(255, 127, 80)',
    medium = 'rgb(175, 225, 150)',
    low = 'rgb(129, 97, 235)'
}