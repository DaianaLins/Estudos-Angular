import { Component } from '@angular/core';
import { Animal } from '../Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals: Animal[] = [
    {name: "Marley", type: "Dog", age: 8},
    {name: "Bruce", type: "Cat", age: 3},
    {name: "Kiara", type: "Cat", age: 2},
    {name: "Fofinha", type: "Horse", age: 5},
  ];
  animalDetails = '';

  constructor(private listService: ListService){

  }

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal){
    this.animals = this.listService.remove(this.animals, animal)
  }

}
