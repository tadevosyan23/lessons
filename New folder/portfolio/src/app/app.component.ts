import { Component } from '@angular/core';

declare var jquery:any; 
declare var $ :any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My Portfolio';


  fun1(event){
    $("nav").fadeToggle().css({
      "height": "80px",
      "width": "100%",
      "margin-top": "60px",
      "display":"flex",
      "justify-content": "center"
    });
    $("nav a").css({
      "margin": "10px",
    });
  }
}

