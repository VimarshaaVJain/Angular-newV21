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
  name: string = "";
  city: string = "";
  email: string = "";

  updateName(str: string) {
    this.name = str;
  }

  getAge(value: string) {
    this.email = value;
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
