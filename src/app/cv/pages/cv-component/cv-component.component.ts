
import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { CvServiceService } from '../../services/cv-service.service';
import { EmbaucheService } from '../../services/embauche.service';


@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css'],
  providers:[EmbaucheService],
})
export class CvComponentComponent implements OnInit {
    person = new Person();


  constructor(private cvServiceService: CvServiceService , private embaucheService: EmbaucheService ) { }

  ngOnInit(): void {
  }

  processSonData(data): void{
    this.person = this.cvServiceService.processSonData(data);

    }

}
