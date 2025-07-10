import { Component, Input, OnInit } from '@angular/core';
import { reviews } from '../../mocks/reviews';
import { Rating, Reviews } from '../types/types';
import { RatingWidthPipe } from "../pipes/rating-width.pipe";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reviews',
  imports: [RatingWidthPipe, DatePipe],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit {
  state!: {
    rating: number,
    comment: string,
  };

  offerReviews: Reviews = [];

  RATINGS: Rating[] = [
    {
      value: 5,
      stars: '5-stars',
      title: 'perfect'
    },
    {
      value: 4,
      stars: '4-stars',
      title: 'good'
    },
    {
      value: 3,
      stars: '3-stars',
      title: 'not bad'
    },
    {
      value: 2,
      stars: '2-stars',
      title: 'badly'
    },
    {
      value: 1,
      stars: '1-star',
      title: 'terribly'
    },
  ];

  @Input()
  offerId!: string;

  ngOnInit(): void {
    this.offerReviews = reviews.filter(review => review.id === this.offerId);
  }

  updateRating(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target && target.value) {
      this.state.rating = Number(target.value);
    }
  }
}
