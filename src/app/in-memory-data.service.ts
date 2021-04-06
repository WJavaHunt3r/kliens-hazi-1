import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const movies = [
      {id:11, title: 'Titanic', release_date: 1997, genre: 'Romance', length: 210 },
      {id:12, title: 'Titanic', release_date: 1997, genre: 'Romance', length: 210 },
      {id:13, title: 'Titanic', release_date: 1997, genre: 'Romance', length: 210 },
      {id:14, title: 'Titanic', release_date: 1997, genre: 'Romance', length: 210 },
      {id:15, title: 'Titanic', release_date: 1997, genre: 'Romance', length: 210 },
      {id:16, title: 'Titanic', release_date: 1997, genre: 'Romance', length: 210 },
    ]
    return {movies};
  }
}
