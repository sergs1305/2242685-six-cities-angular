import { Component, Input } from '@angular/core';
import { selectCityAction } from '../../state/actions/city.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/reducers/reducers';

@Component({
  selector: 'app-cities',
  imports: [],
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
  @Input() citiesNames: string[] = [];
  @Input() currentCityName = '';

  constructor(private store: Store<AppState>) {}

  selectCity(cityName: string): void {
    this.store.dispatch(selectCityAction({ cityName }));
  }
}
