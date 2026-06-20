import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class Events {
  // count = 0;
  count = signal(0);
  name = '';

  increament(){
    // this.count++;
    this.count.update((c) => c + 1); // here, this.count.update((c) => c++) doesnt work
  }

  showEvent(e : any){
    console.log(e);
  }

  updateName(value : string){
    this.name = value;
  }

  submitForm(e : any){
    e.preventDefault();
    console.log("Submitted!!")
  }
}
