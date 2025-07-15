import { Component, Input, OnInit } from '@angular/core';
import { reviews } from '../../mocks/reviews';
import { Reviews } from '../types/types';
import { RatingWidthPipe } from "../pipes/rating-width.pipe";
import { DatePipe } from '@angular/common';
import { RATINGS } from './const';

@Component({
  selector: 'app-reviews',
  imports: [RatingWidthPipe, DatePipe],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit {
  // свойства состояния
  rating = 0;
  comment = '';

  offerReviews: Reviews = [];

  ratings = RATINGS;

  @Input()
  offerId!: string;

  ngOnInit(): void {
    this.offerReviews = reviews.filter(review => review.id === this.offerId);
  }

  updateRating(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target && target.value) {
      this.rating = Number(target.value);
    }
  }

  updateComment(event: Event) {
    const target = event.target as HTMLTextAreaElement | null;
    if (target && target.value) {
      this.comment = target.value;
    }
  }

}
