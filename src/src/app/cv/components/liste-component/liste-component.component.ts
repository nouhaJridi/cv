import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-liste-component',
  templateUrl: './liste-component.component.html',
  styleUrls: ['./liste-component.component.css']
})

export class ListeComponentComponent implements OnInit {
  @Output() sendDataToSon = new EventEmitter();
  public persons: Person[] = []
  constructor() { }

  processSonData(data): void{
    this.sendDataToSon.emit(data);

  }

  ngOnInit(): void {

  this.persons = [
    new Person(0, 'jridi' , '' , 'nouha', 'student', 4587521 ,  23),
    new Person(1, 'jridi' , 'rotating_card_profile2.png' , 'sahbi', 'maitre', 4587521 ,  53),
    new Person(2, 'manaa' , 'rotating_card_profile.png' , 'janette', 'professeur', 4587521 ,  52),
    new Person(3, 'jridi' , 'rotating_card_profile3.png' , 'ahmed', 'student', 4587521 ,  21)
  ];

  }


}
