import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'mm-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  constructor() { }

  ngOnInit(): void {
    this.movie = {title: "Titanic",
                  release_date: 1997,
                  genre: 'Romance',
                  length: 200};
  }

  editMovie(){

  }

  deleteMovie(){
    
  }

}
