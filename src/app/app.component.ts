import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { MainComponent } from "./main/main.component";
// import { offers } from '../mocks/offers';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-template-project';
}
