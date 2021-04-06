import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'mm-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  cardView: boolean;
  constructor(private movieService: MovieService,private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.cardView = false;
    this.getMovies()
  }

  getMovies(){
    this.movieService.getMovies().subscribe(movies => {
      console.log(movies);
      this.movies = movies;
    });
  }

  onClick(index:number){    
    this.router.navigateByUrl(`movies/${this.movies[index].id}`);
  }

  addMovie(){
    this.router.navigateByUrl("movies/new");
  }
}
