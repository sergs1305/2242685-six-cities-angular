import { Component, OnInit } from '@angular/core';
import { offers } from '../../mocks/offers';
import { Offers } from '../types/types';
import { CurrencyPipe } from '@angular/common';
import { RatingWidthPipe } from "../pipes/rating-width.pipe";

@Component({
  selector: 'app-favorites',
  imports: [CurrencyPipe, RatingWidthPipe],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  favoriteOffers: Offers = [];
  uniqueCityNames: string[] = [];

  ngOnInit(): void {
    this.favoriteOffers = offers.filter((offer) => offer.isFavorite === true);
    this.uniqueCityNames = [...new Set(this.favoriteOffers.map((offer) => offer.city.name))];
  }

  getCityFavoriteOffers(cityName: string) {
    return this.favoriteOffers.filter((offer) => offer.city.name === cityName);
  }

}
