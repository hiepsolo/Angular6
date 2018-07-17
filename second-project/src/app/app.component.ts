import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: User;
  inputText = 'Initial value';
  constructor() {
    this.user = new User();
    this.user.name = 'Chilvas';
    this.user.designation = 'Developer';
    this.user.address = '23 Lam Du';
    this.user.phone = [
      '0969539448',
      '0904352671'
    ];
  }
}
