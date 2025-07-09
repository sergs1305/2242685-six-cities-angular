import { Component, Input } from '@angular/core'; //, SimpleChanges, OnChanges
import { PlaceCardComponent } from '../place-card/place-card.component';
import { Offers } from '../types/types';
// import { offers } from '../../mocks/offers';

@Component({
  selector: 'app-places-list',
  imports: [PlaceCardComponent],
  templateUrl: './places-list.component.html',
  styleUrl: './places-list.component.css'
})

export class PlacesListComponent {
  activeCardOfferId = 0;

  @Input() displayedOffers: Offers = [];

  setActiveCardOfferId(newActiveCardOfferId: number) {
    this.activeCardOfferId = newActiveCardOfferId;
  }
}
