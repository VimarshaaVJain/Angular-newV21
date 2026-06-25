import { Component, effect, signal } from '@angular/core';
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
  count = signal<number>(0);
  isDarkMode = signal<boolean>(false);
  msg = signal<string>("");

  constructor() {
    effect(() => {
      this.count();
    });

    effect(() => {
      if (this.isDarkMode()) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'gold';

      } else {
        document.body.style.backgroundColor = 'gold';
        document.body.style.color = 'black';

      }
    })

    effect(() => {
      if (this.msg()) {
        setTimeout(() => {
          alert(this.msg());
          this.msg.set("");
        }, 1000)

      }
    })
  }

  inc() {
    this.count.update((c) => c + 1);
    this.isDarkMode.update((m) => !m);
    // alert(this.count());
  }

  onClickMsg() {
    this.msg.set("Temp Message!!");
  }
}
