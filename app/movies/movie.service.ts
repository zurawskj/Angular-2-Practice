import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise';

import {Movie} from './movie';

@Injectable()
export class MovieService {
  private moviesUrl = 'app/movies';
  
  private selectedMovieSource = new Subject<Movie>();
  selectedMovie$ = this.selectedMovieSource.asObservable();

  constructor(private http:Http) { }

  getMovies(): Promise<Movie[]> {
    return this.http.get(this.moviesUrl)
      .toPromise()
      .then(response => response.json().data as Movie[])
      .catch(this.handleError);
  }

  selectMovie(movie: Movie) {
    this.selectedMovieSource.next(movie);
  }

  handleError(err: any) {
    console.log('Error: ' + err);
    //error handling
  }
}