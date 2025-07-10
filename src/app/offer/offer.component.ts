import { Component, OnInit } from '@angular/core';
import { Offer } from '../types/types'; // FullOffer
import { ActivatedRoute } from '@angular/router';
import { offers } from '../../mocks/offers';
import { RatingWidthPipe } from "../pipes/rating-width.pipe";
import { CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-offer',
  imports: [RatingWidthPipe, CurrencyPipe, TitleCasePipe],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})

export class OfferComponent implements OnInit {
  offerId: string | null = '';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.offerId = params.get('offerId');
    });
    this.offer = offers.find(offer => offer.id === this.offerId) || this.offer;
  }
}
