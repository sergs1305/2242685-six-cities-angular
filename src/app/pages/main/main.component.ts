import { Component, OnInit } from '@angular/core';
import { PlacesListComponent } from "../../components/places-list/places-list.component";
import { Offers } from '../../types/types';
import { MapComponent } from "../../components/map/map.component";
import { CITIES, PlacesListPage } from '../../const'; // , DEFAULT_CITY_INDEX
import { CitiesComponent } from "../../components/cities/cities.component";
import { getCityOffers, getCurrentCityName } from '../../state/selectors/offers.selectors';
import { Observable } from 'rxjs';
import { selectCityAction } from '../../state/actions/city.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/reducers/reducers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [PlacesListComponent, MapComponent, CitiesComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  citiesNames = CITIES.map(city => city.name);
  cityOffers$!: Observable<Offers>;
  // currentCity$!: Observable<City>;
  currentCityName$!: Observable<string>;

  constructor(private store: Store<AppState>) {}

  placesListPage = PlacesListPage;

  ngOnInit(): void {
    this.cityOffers$ = this.store.select(getCityOffers);
    // this.currentCity$ = this.store.select(getCurrentCity);
    this.currentCityName$ = this.store.select(getCurrentCityName);
  }

  selectCity(cityName: string): void {
    this.store.dispatch(selectCityAction({ cityName }));
  }

}
