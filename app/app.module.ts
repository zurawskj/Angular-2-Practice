import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DashboardComponent} from './movies/dashboard.component';
import {MovieListComponent} from './movies/movie-list.component';
import {MovieDetailComponent} from './movies/movie-detail.component';
import {MovieService} from './movies/movie.service';

import {AppRoutingModule} from './app-routing.module';
import {MaterializeDirective} from 'angular2-materialize';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule, //Remember, this has to go before the InMemoryWebApiModule import
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieListComponent,
    MovieDetailComponent,
    MaterializeDirective
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
