import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { SigninComponent } from './signin/signin';
// import { RouterOutlet } from '@angular/router';
import { Events } from './events/events';

@Component({
  selector: 'app-root',
  imports: [Login, SigninComponent, Events],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  items = ['HTML', 'Css', 'JavaScript', 'Angular'];
  users = [{ name: 'Ro', age: 31 },
  { name: 'Vo', age: 30 },
  { name: 'Mo', age: 23 }
  ];

  fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

  nums = [20, 10, 15, 30, 45, 22, 39, 67];

  remove(i: number) {
    this.fruits.splice(i, 1);
  }
}