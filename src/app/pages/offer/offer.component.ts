import { Component, OnInit, OnDestroy } from '@angular/core';
import { Offer } from '../../types/types'; // FullOffer
import { ActivatedRoute } from '@angular/router';
import { offers } from '../../../mocks/offers';
import { RatingWidthPipe } from "../../pipes/rating-width.pipe";
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { ReviewsComponent } from "../../components/reviews/reviews.component";
import { MapComponent } from "../../components/map/map.component";
import { PlacesListComponent } from "../../components/places-list/places-list.component";
import { PlacesListPage } from '../../const';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offer',
  imports: [RatingWidthPipe, CurrencyPipe, TitleCasePipe, ReviewsComponent, MapComponent, PlacesListComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})

export class OfferComponent implements OnInit, OnDestroy {
  offerId = '';
  nearbyOffers = offers.slice(0, 3);
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
  placesListPage = PlacesListPage;
  subscription = new Subscription();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(params => {
      const id = params.get('offerId');
      if (id) {
        this.offerId = id;
      } else {
        // Обработка случая отсутствия параметра
        console.error('Параметр offerId не найден');
      }
    });
    this.offer = offers.find(offer => offer.id === this.offerId) || this.offer;
  }

  ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
