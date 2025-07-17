import { Component, OnInit } from '@angular/core';
import { PlacesListComponent } from "../../components/places-list/places-list.component";
import { offers } from '../../../mocks/offers';
import { City, Offers } from '../../types/types';
import { MapComponent } from "../../components/map/map.component";
import { CITIES, DEFAULT_CITY_INDEX, PlacesListPage } from '../../const';

@Component({
  selector: 'app-main',
  imports: [PlacesListComponent, MapComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  cityOffers: Offers = [];
  currentCity: City = {
    name: CITIES[DEFAULT_CITY_INDEX],
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0
    }
  };
  placesListPage = PlacesListPage;

  ngOnInit(): void {
    const foundOffer = offers.find(offer => offer.city.name === this.currentCity.name);
    if (foundOffer) {
      this.currentCity.location = foundOffer.location;
    }

    this.cityOffers = offers.filter(offer => offer.city.name === this.currentCity.name);
  }

}
