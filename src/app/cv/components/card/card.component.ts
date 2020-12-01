import { EmbaucheService } from './../../services/embauche.service';

import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 @Input() person: Person ;

  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {

  }

onClick(): void{
this.embaucheService.embaucher(this.person);
  }

}
