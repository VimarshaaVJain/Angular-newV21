import { Component, signal, computed } from '@angular/core';
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
  count = signal<number>(2);
  doubleCount = computed<number>(() => this.count() * 2);
  tripleCount = computed<number>(() => this.count() * 3);

  fName = signal<string>('Rohit');
  lName = signal<string>('Maiti');
  fullName = computed<string>(() => this.fName() + " " + this.lName());

  price = signal<number[]>([10, 20, 30, 40, 50]);
  total = computed<number>(() => {
    return this.price().reduce((acc, cur) => acc + cur, 0);
  })


  increament() {
    this.count.set(this.count() + 1);
  }

}