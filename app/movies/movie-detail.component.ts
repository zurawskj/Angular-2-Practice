import {Component, Input} from '@angular/core';
import {Movie} from './movie';
import {MovieService} from './movie.service';

import {Subscription} from 'rxjs/Subscription';

@Component({
  templateUrl: './app/movies/movie-detail.component.html',
  selector: 'movie-detail'
})
export class MovieDetailComponent {
  @Input()
  movie: Movie;
  selectedMovieSubscription: Subscription;

  constructor(private movieService: MovieService) {
    this.selectedMovieSubscription = movieService.selectedMovie$.subscribe(
      movie => {
        this.movie = movie;
      }
    )
  }
}