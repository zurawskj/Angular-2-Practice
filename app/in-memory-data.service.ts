import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let movies = [
      {id: 1, name: 'Peewee\'s Big Adventure'},
      {id: 2, name: 'Star Wars Episode III'},
      {id: 3, name: 'The Boy'},
      {id: 4, name: 'The Loft'},
      {id: 5, name: 'Green Room'},
      {id: 6, name: 'Blue Ruin'},
      {id: 7, name: 'The Grey'},
      {id: 8, name: 'Grown Ups 2'},
      {id: 9, name: 'Pixels'},
      {id: 10, name: 'Krampus'}
    ];
    return {movies};
  }
}