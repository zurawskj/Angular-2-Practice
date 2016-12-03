import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DashboardComponent} from './movies/dashboard.component';
import {MovieListComponent} from './movies/movie-list.component';
import {MovieDetailComponent} from './movies/movie-detail.component';

import {AppRoutingModule} from './app-routing.module';
import {MaterializeDirective} from 'angular2-materialize';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MaterializeDirective,
    DashboardComponent,
    MovieListComponent,
    MovieDetailComponent
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
