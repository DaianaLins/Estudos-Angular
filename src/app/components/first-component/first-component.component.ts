import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name: string = 'Daiana';
  age: number = 30;
  hobies = ['correr', 'jogar', 'cantar'];
  car ={
    name: 'Polo',
    year: 2019
  }
}
