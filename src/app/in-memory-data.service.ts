import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Movie } from './models/movie';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const movies = [
      {id:11, title: 'Titanic', release_date: 1997, genre: 'Romance', length: 210 },
      {id:12, title: 'The Dark night', release_date: 2008, genre: 'Action', length: 152 },
      {id:13, title: 'The Lord of the Rings: The Return of the King', release_date: 2003, genre: 'Action', length: 201 },
      {id:14, title: 'Forrest Gump', release_date: 1994, genre: 'Drama', length: 142 },
      {id:15, title: 'Inception', release_date: 2010, genre: 'Action', length: 148 },
      {id:16, title: 'The Matrix', release_date: 1999, genre: 'Action', length: 136 },
    ];
    return {movies};
  }
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
}
