import { Person } from './../../models/person';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent implements OnInit {
  @Input() person: Person;
  @Output() sendDataItemToList = new EventEmitter();
  constructor() { }

  sendData(): void {
    this.sendDataItemToList.emit(
     {person: this.person});

    }


  ngOnInit(): void {
  }

}
