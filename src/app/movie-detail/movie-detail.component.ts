import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteMovieComponent } from '../delete-movie/delete-movie.component';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'mm-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  movieId: string;
  isDataLoaded: boolean = false;
  constructor(private movieService: MovieService,private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.movieId = params.get('movieId');
    this.movieService.getMovie(this.movieId).subscribe(movie => {
      this.movie = movie;
      this.isDataLoaded = true;
    })
  }

  editMovie(){
    this.router.navigateByUrl(`movies/${this.movie.id}/edit`);
  }

  deleteMovie(){
    let modal = this.modalService.open(DeleteMovieComponent, { backdrop: 'static', centered: true });
  (modal.componentInstance as DeleteMovieComponent).initParameters({
    movie: this.movie
  }, {
    cancel: () => {
      modal.close();
    },
    ok: () => {
      this.movieService.deleteMovie(this.movie.id).subscribe(message => {
      });
      modal.close();
      this.router.navigateByUrl(`movies`);
    }
  });
    

  }

}
