import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercice';
  colorInput = 'red';
  defaultColor = 'lightblue';

  changeColor (color: string){
    this.colorInput = color ;
  }

  onClick(){
    this.colorInput = this.defaultColor;
  }


}
