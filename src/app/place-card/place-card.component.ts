import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Offer } from '../types/types';
import { RatingWidthPipe } from "../pipes/rating-width.pipe";
import { RouterModule  } from '@angular/router';

@Component({
  selector: 'app-place-card',
  imports: [CurrencyPipe, TitleCasePipe, RatingWidthPipe, RouterModule],
  templateUrl: './place-card.component.html',
  styleUrl: './place-card.component.css'
})

export class PlaceCardComponent {
  onFocus() { // нужен???
    throw new Error('Method not implemented.');
  }
  onMouseOver() {
    this.offerId.emit(this.offer.id);
  }

  @Output() offerId = new EventEmitter();

  @Input() offer: Offer = {
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

}
