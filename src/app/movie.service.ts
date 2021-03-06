import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Movie } from './models/movie';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private static readonly baseUrl: string = 'api/movies'

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient) { }

  getMovies() {
    return this.http.get<Movie[]>(`${MovieService.baseUrl}`);
  }

  getMovie(movieId: string){
    return this.http.get<Movie>(`${MovieService.baseUrl}/${movieId}`);
  }

  updateMovie(movie: Movie){
    return this.http.put<Movie>(`${MovieService.baseUrl}`, movie, this.httpOptions);
  }

  postMovie(movie: Movie){
    return this.http.post<Movie>(`${MovieService.baseUrl}`, movie, this.httpOptions);
  }

  deleteMovie(movieId: number){
    return this.http.delete<Movie>(`${MovieService.baseUrl}/${movieId}`, this.httpOptions);
  }
}
