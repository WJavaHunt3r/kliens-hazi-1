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
  thumbnail: string;
  genres: Genre[] = ['Romance' , 'Comedy' , 'Drama' , 'Action' , 'Fantasy' , 'Horror' , 'Thriller' , 'Animation' , 'Other'];
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
        this.thumbnail = movie.thumbnail;
        this.release_date = movie.release_date;
      })
    }
    
  }

  update(){
    this.movie.title = this.title;
    this.movie.genre = this.genre;
    this.movie.length = this.length;
    this.movie.release_date = this.release_date;
    this.movie.thumbnail = this.thumbnail;
    this.movieService.updateMovie(this.movie).subscribe(() =>{
      
      this.router.navigateByUrl(`movies/${this.movie.id}`);
    })
  }

  addMovie(){
    this.movie = {title: this.title,
                  genre : this.genre,
                  length : this.length,
                  release_date : this.release_date,
                  thumbnail: this.thumbnail ? this.thumbnail : 'http://placehold.it/1500x2000/000/fff'}
    this.movieService.postMovie(this.movie).subscribe(movie =>{
      this.router.navigateByUrl("movies");
    })
  }

}
