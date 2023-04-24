import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName= 'Daiana';
  userData = {
    email: 'daiana@mail.com',
    role: 'Admin'
  }
  title = 'EstudosAngular';
}
