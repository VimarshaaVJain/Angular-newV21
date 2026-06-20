import { Component } from "@angular/core";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.html',
    styleUrl: './signin.scss'
    // template: `<h1>Signin </h1>
    //             <h2>{{title}}</h2>`,
    // styles: [`h1{
    //     color: blue;
    //     }`]
})

export class SigninComponent {
    title = "Sigin Page";
}