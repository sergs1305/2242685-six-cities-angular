import { Component } from '@angular/core';
import { PlacesListComponent } from "../../components/places-list/places-list.component";
import { offers } from '../../../mocks/offers';
import { Offers } from '../../types/types';
import { MapComponent } from "../../components/map/map.component";

@Component({
  selector: 'app-main',
  imports: [PlacesListComponent, MapComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  offers: Offers = offers;
}
