import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Friendster';

  constructor(){
    console.log(new Date(2018, 11, 24, 10, 33));
    
  }
  
}
