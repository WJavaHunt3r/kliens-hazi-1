import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';
import { AddUpdateComponent } from './add-update/add-update.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RouterModule } from '@angular/router';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AddUpdateComponent,
    MovieDetailComponent,
    DeleteMovieComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([ 
      { path: 'movies/new', component: AddUpdateComponent }, 
      { path: 'movies/:movieId', component: MovieDetailComponent},
      { path: 'movies', component: MoviesComponent },
           
      {path: 'movies/:movieId/edit', component: AddUpdateComponent },
      {path: '', redirectTo: 'movies', pathMatch: 'full'},
    ]),
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
