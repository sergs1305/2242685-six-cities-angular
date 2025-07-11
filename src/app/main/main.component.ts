import { Component } from '@angular/core';
import { PlacesListComponent } from "../places-list/places-list.component";
import { offers } from '../../mocks/offers';
import { Offers } from '../types/types';

@Component({
  selector: 'app-main',
  imports: [PlacesListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  offers: Offers = offers;
  // numbers = Array.from({length: 5}, (_, i) => i + 1);
}
