import { Person } from './../../models/person';
import { EmbaucheService } from './../../services/embauche.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embauche-component',
  templateUrl: './embauche-component.component.html',
  styleUrls: ['./embauche-component.component.css']
})
export class EmbaucheComponentComponent implements OnInit {

  constructor(private embaucheService: EmbaucheService) { }

  persons: Person [] = [];
  ngOnInit(): void {
    this.persons = this.embaucheService.logger();
  }

}
