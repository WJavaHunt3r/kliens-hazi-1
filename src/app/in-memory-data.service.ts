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
      {id:11, title: 'Titanic', release_date: 1997, genre: 'Romance', length: 210, thumbnail: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR88,0,630,1200_AL_.jpg' },
      {id:12, title: 'The Dark night', release_date: 2008, genre: 'Action', length: 152, thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg' },
      {id:13, title: 'The Lord of the Rings: The Return of the King', release_date: 2003, genre: 'Action', length: 201, thumbnail: 'http://www.limitedruns.com/media/cache/7e/6b/7e6b6743a7e45d096838abd67b2464e2.jpg' },
      {id:14, title: 'Forrest Gump', release_date: 1994, genre: 'Drama', length: 142,thumbnail: 'https://www.citatum.hu/kepek/filmek/nagy/forrest_gump.jpg' },
      {id:15, title: 'Inception', release_date: 2010, genre: 'Action', length: 148, thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/91yyhL3xE8L._AC_SL1500_.jpg' },
      {id:16, title: 'The Matrix', release_date: 1999, genre: 'Action', length: 136, thumbnail: 'https://i2.wp.com/cornandsoda.com/wp/wp-content/uploads/2017/03/poster.jpg?resize=665%2C1000' },
    ];
    return {movies};
  }
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
}
