import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingWidth'
})
export class RatingWidthPipe implements PipeTransform {

  transform(rating: number): number {
    return Math.round(rating) * 20;
  }

}
