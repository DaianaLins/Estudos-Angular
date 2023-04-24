import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  size = 40;
  font = 'Arial';
  color = 'red';

  classe = ["greentile", "small-title"];
  underline = "underline-title";

  today = new Date();

}
