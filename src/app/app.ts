import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  name = 'RV Tutorials';
  username = "Rohit";
  isAdmin = true;
  count = 1;
  price = 199.99;
  isLogin = true;
  title = signal("RV Tutorials")
  getUser(){
    return this.username;
  } 
}
