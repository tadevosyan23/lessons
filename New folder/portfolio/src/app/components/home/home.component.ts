import { Component } from '@angular/core';


declare var jquery:any; 
declare var $ :any;



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  
  load(e){
    $("h1").fadeIn();
  }

}
