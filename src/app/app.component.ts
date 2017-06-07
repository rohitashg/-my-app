import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [`
    .title{
      background-color: #000;
      color: #fff;
      text-align: center;
    }
    `]
})

export class AppComponent {
  title = 'Tour of Heroes';
  
}
