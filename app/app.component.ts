import {Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent {
  constructor(){}
  ngOnInit() {
    //init materialiaze sidenav
    jQuery('.button-collapse').sideNav();
  }
}