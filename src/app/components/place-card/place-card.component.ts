import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Offer } from '../../types/types';
import { RatingWidthPipe } from '../../pipes/rating-width.pipe';
import { RouterModule } from '@angular/router';
import { PlacesListPage } from '../../const';

@Component({
  selector: 'app-place-card',
  imports: [CurrencyPipe, TitleCasePipe, RatingWidthPipe, RouterModule],
  templateUrl: './place-card.component.html',
  styleUrl: './place-card.component.css'
})

export class PlaceCardComponent implements OnInit {
  placeCardClass = 'cities__card place-card';
  placeCardImageWrapperClass = 'cities__image-wrapper place-card__image-wrapper';
  placesListPage = PlacesListPage;

  onFocus() { // нужен???
    throw new Error('Method not implemented.');
  }
  onMouseOver() {
    this.offerId.emit(this.offer.id);
  }

  ngOnInit() {
    switch (this.placesListPageName) {
      case PlacesListPage.Main:
        this.placeCardClass = 'cities__card place-card';
        this.placeCardImageWrapperClass = 'cities__image-wrapper place-card__image-wrapper';
        break;
      case PlacesListPage.Offer:
        this.placeCardClass = 'near-places__card place-card';
        this.placeCardImageWrapperClass = 'near-places__image-wrapper place-card__image-wrapper';
        break;
    }
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
  @Input() placesListPageName = PlacesListPage.Main;

}
