import { Genre } from "./genre";

export interface Movie{
    id:number;
    title: string;
    release_date: number;
    genre: Genre;
    length: number;
}