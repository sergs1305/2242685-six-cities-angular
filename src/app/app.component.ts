import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceCardComponent } from "../app/place-card/place-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlaceCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-template-project';
  numbers = Array.from({length: 5}, (_, i) => i + 1);
}
