import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {
  person ;
  constructor() { }

  processSonData(data): Person{
    const person = data.person;
    return person;
    }
}
