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
  counter: number = 0;

  onClick(str: string) {
    if (str === 'add') {
      this.counter++;

    } else if (str === 'sub') {
      if (this.counter > 0) {
        this.counter--;

      }

    } else {
      this.counter = 0;

    }
  }






  // value: string | number = "10"; //  if a variable has multiple datatype then, it is called union type
  // name = 'RV Tutorials';
  // name = 'Rohit';
  // count = 0;
  // handleClick() {
  //   console.log("Submitted!!")
  //   this.increament();
  // }

  // increament() {
  //   this.count++;
  // }

  // onClick() {
  //   alert('Clicked');
  // }

  // onInput(event: any) {
  //   console.log("Inside Input field", event.target.value);
  // }

  // onKeyUp(event: any) {
  //   console.log("keyUp", event.target.value);
  // }

  // onBlur() {
  //   console.log("blur Event");
  // }

  // onFocus() {
  //   console.log("focus Event");
  // }

  // onMouse() {
  //   console.log("Mouse enter");
  // }

  // offMouse() {
  //   console.log("Mouse exit");
  // }

}
