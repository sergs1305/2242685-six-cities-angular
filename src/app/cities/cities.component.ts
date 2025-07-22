import { Component, Input } from '@angular/core';
import { City } from '../types/types';

@Component({
  selector: 'app-cities',
  imports: [],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent {
  @Input() cities: City[] = [];
  @Input() currentCityName = '';

  setCity() {
    throw new Error('Method not implemented.');
  }

}
