import { Component, OnInit } from '@angular/core';
import { PlacesListComponent } from "../../components/places-list/places-list.component";
import { offers } from '../../../mocks/offers';
import { City, Offers } from '../../types/types';
import { MapComponent } from "../../components/map/map.component";
import { CITIES, DEFAULT_CITY_INDEX } from '../../const';

@Component({
  selector: 'app-main',
  imports: [PlacesListComponent, MapComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  offers: Offers = [];
  currentCity: City = {
    name: CITIES[DEFAULT_CITY_INDEX],
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0
    }
  };

  ngOnInit(): void {
    const foundOffer = offers.find(offer => offer.city.name === this.currentCity.name)?.location;
    if (foundOffer) {
      this.currentCity.location = foundOffer;
    }

    this.offers = offers.filter(offer => offer.city.name === this.currentCity.name);
  }

}
