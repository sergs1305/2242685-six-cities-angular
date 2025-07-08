import { Component, Input } from '@angular/core';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Offer } from '../types/types';

@Component({
  selector: 'app-place-card',
  imports: [CurrencyPipe, TitleCasePipe],
  templateUrl: './place-card.component.html',
  styleUrl: './place-card.component.css'
})

export class PlaceCardComponent {
  @Input()
    offer: Offer = {
      id: '',
      title: '',
      type: '',
      price: 0,
      previewImage: '',
      city: {
        name: '',
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 0
        }
      },
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0
      },
      isFavorite: false,
      isPremium: false,
      rating: 0
    };

    getRatingWidth(): number {
    return Math.round(this.offer.rating) * 20;
  }
}
