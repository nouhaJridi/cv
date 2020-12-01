import { Person } from './../models/person';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: null
})
export class EmbaucheService {

  persons: Person [] = [];
  constructor() { }

  embaucher(person: Person): void{
    if(this.persons.indexOf(person) === -1)
      this.persons.push(person);
  }

  logger(): Person[]{
    return this.persons;
  }
}
