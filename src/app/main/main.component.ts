import { Component } from '@angular/core';
import { PlaceCardComponent } from "../place-card/place-card.component";

@Component({
  selector: 'app-main',
  imports: [PlaceCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  numbers = Array.from({length: 5}, (_, i) => i + 1);
}
