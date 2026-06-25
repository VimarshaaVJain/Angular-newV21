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
  count = signal(0);  //signal created
  value = 20;


  increament() {
    this.count.update(c => c + 1); //signal updated can also use, count.set(2)
  }

  decrement() {
    if (this.count() > 0) {
      this.count.update(c => c - 1); //signal updated can also use, count.set(2)
    }
  }

  reset() {
    this.count.set(0);
  }

}