import {Component, OnInit} from '@angular/core';
import {Movie} from './movie';
import {MovieService} from './movie.service';

import {Subscription} from 'rxjs/Subscription';

@Component({
  templateUrl: './app/movies/movie-list.component.html',
  selector: 'movie-list'
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie = null;
  selectedMovieSubscription: Subscription;

  constructor(private movieService: MovieService) {
    this.selectedMovieSubscription = movieService.selectedMovie$.subscribe(
      movie => {
        this.selectedMovie = movie;
      }
    )
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies()
      .then(movies => this.movies = movies);
  }

  onSelect(movie: Movie) {
    this.movieService.selectMovie(movie);
  }
}