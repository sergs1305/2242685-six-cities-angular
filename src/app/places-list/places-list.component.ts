import { Component, Input, SimpleChanges } from '@angular/core';
import { PlaceCardComponent } from '../place-card/place-card.component';

@Component({
  selector: 'app-places-list',
  imports: [PlaceCardComponent],
  templateUrl: './places-list.component.html',
  styleUrl: './places-list.component.css'
})
export class PlacesListComponent {
  @Input() placesCount = 5;
  numbers: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['placesCount']) {
      this.numbers = Array.from({ length: this.placesCount }, (_, i) => i + 1);
    }
  }
}
