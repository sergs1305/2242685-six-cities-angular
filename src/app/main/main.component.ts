import { Component } from '@angular/core';
import { PlacesListComponent } from "../places-list/places-list.component";

@Component({
  selector: 'app-main',
  imports: [PlacesListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  numbers = Array.from({length: 5}, (_, i) => i + 1);
}
