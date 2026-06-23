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
  value: string | number = "10"; //  if a variable has multiple datatype then, it is called union type

  // name = 'RV Tutorials';
  // name = 'Rohit';
  count = 0;
  handleClick() {
    console.log("Submitted!!")
    this.increament();
  }

  increament() {
    this.count++;
  }

}
