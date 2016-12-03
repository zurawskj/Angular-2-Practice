import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MainMovieComponent} from './movies/main-movie.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    MainMovieComponent
  ],
  bootstrap: [MainMovieComponent]
})
export class AppModule { } 
