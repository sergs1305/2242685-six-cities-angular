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

export class PlacesListComponent { //implements OnChanges {
  @Input() displayedOffers: Offers = [];
  // @Input() placesCount = 5;
  // numbers: number[] = [];

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['placesCount']) {
  //     this.numbers = Array.from({ length: this.placesCount }, (_, i) => i + 1);
  //   }
  // }
}
