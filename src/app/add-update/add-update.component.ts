import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../models/genre';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'mm-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.scss']
})
export class AddUpdateComponent implements OnInit {
  updating:boolean;
  title: string;
  release_date: number;
  genre: Genre;
  length: number;
  movieId: string;
  movie: Movie;
  constructor(private movieService: MovieService,private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.route.url.subscribe(e => {
      this.updating = e.length > 2 && e[2].path === 'edit';      
    })
    const params = this.route.snapshot.paramMap;
    this.movieId = params.get('movieId');
    if (this.updating) {
      this.movieService.getMovie(this.movieId).subscribe(movie => {
        this.movie = movie;
        this.title = movie.title;
        this.genre = movie.genre;
        this.length = movie.length;
        this.release_date = movie.release_date;
      })
    }
    
  }

  update(){
    this.movie.title = this.title;
    this.movie.genre = this.genre;
    this.movie.length = this.length;
    this.movie.release_date = this.release_date;
    this.movieService.updateMovie(this.movie).subscribe(movie =>{
      this.router.navigateByUrl("");
    })
  }

  addMovie(){
    this.movie = {title: this.title,
                  genre : this.genre,
                  length : this.length,
                  release_date : this.release_date}
    this.movieService.postMovie(this.movie).subscribe(movie =>{
      console.log(movie);
      this.router.navigateByUrl("movies");
    })
  }

}
