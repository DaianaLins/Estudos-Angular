import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals = [
    {name: "Marley", type: "Dog"},
    {name: "Diego", type: "Cat"},
    {name: "Bob", type: "Dog"},
    {name: "Bebel", type: "Horse"},
  ];


}
