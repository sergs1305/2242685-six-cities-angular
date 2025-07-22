import { Component, Input, OnInit } from '@angular/core'; //, SimpleChanges, OnChanges
import { PlaceCardComponent } from '../place-card/place-card.component';
import { Offers } from '../../types/types';
import { PlacesListPage } from '../../const';

@Component({
  selector: 'app-places-list',
  imports: [PlaceCardComponent],
  templateUrl: './places-list.component.html',
  styleUrl: './places-list.component.css'
})

export class PlacesListComponent implements OnInit {
  activeCardOfferId = 0;
  placesListClass = '';

  @Input() displayedOffers: Offers = [];
  @Input() placesListPageName = PlacesListPage.Main;

  ngOnInit() {
    switch (this.placesListPageName) {
      case PlacesListPage.Main:
        this.placesListClass = 'cities__places-list places__list tabs__content';
        break;
      case PlacesListPage.Offer:
        this.placesListClass = 'near-places__list places__list';
        break;
    }
  }

  setActiveCardOfferId(newActiveCardOfferId: number) {
    this.activeCardOfferId = newActiveCardOfferId;
  }
}
