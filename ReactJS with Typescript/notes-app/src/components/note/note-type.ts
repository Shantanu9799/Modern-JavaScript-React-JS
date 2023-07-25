export type Priority = 'high' | 'medium'| 'low';

export type NoteProps = {
    id : string,
    text : string,
    priority ?: Priority,   // by putting ? it shows that it's not mandatory
    editNote : (id: string) => void,
    deleteNote: (id: string) => void
}

export type NoteType = {
    id : string,
    text : string,
    priority : Priority,   // by putting ? it shows that it's not mandatory
}

export enum ColorLight {
    high = 'rgb(255, 127, 80)',
    medium = 'rgb(175, 225, 150)',
    low = 'rgb(129, 97, 235)'
}

export enum ColorDark {
    high = 'rgb(143, 66, 61)',
    medium = 'rgb(190, 131, 179)',
    low = 'rgb(151, 151, 98)'
}