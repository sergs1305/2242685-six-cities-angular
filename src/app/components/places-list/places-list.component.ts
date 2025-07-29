import { Component, Input, OnInit } from '@angular/core'; //, SimpleChanges, OnChanges
import { PlaceCardComponent } from '../place-card/place-card.component';
import { Offers } from '../../types/types';
import { CITIES, DEFAULT_CITY_INDEX, PlacesListPage } from '../../const';

@Component({
  selector: 'app-places-list',
  imports: [PlaceCardComponent],
  templateUrl: './places-list.component.html',
  styleUrl: './places-list.component.css'
})

export class PlacesListComponent implements OnInit {
  activeCardOfferId = 0;
  placesListClass = '';

  @Input() cityOffers: Offers = [];
  @Input() placesListPageName = PlacesListPage.Main;
  @Input() currentCityName = CITIES[DEFAULT_CITY_INDEX].name;

  ngOnInit() {
    switch (this.placesListPageName) {
      case PlacesListPage.Main:
        this.placesListClass = 'cities__places-list places__list tabs__content';
        break;
      case PlacesListPage.Offer:
        this.placesListClass = 'near-places__list places__list';
        break;
      default:
        this.placesListClass = '';
    }
  }

  setActiveCardOfferId(newActiveCardOfferId: number) {
    this.activeCardOfferId = newActiveCardOfferId;
  }
}
