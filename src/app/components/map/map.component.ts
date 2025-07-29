import { Component, AfterViewInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import * as L from 'leaflet';
import * as M from './const';
import { Offers } from '../../types/types';
import { CITIES, DEFAULT_CITY_INDEX } from '../../const';
import { ICON_HEIGHT, ICON_WIDTH, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './const';

const defaultCustomIcon = L.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_WIDTH / 2, ICON_HEIGHT]
});

const currentCustomIcon = L.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_WIDTH / 2, ICON_HEIGHT]
});

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit, OnChanges {

  @Input() cityName = CITIES[DEFAULT_CITY_INDEX].name;
  @Input() cityOffers: Offers = [];
  @Input() selectedOfferId: string | undefined;

  currentCity = CITIES.find(city => city.name === this.cityName) ?? CITIES[DEFAULT_CITY_INDEX];

  mapHeight = M.MAP_HEIGHT;
  mapWidth = M.MAP_WIDTH;

  private map: L.Map | undefined;
  private markers: L.Marker[] = [];

  ngAfterViewInit(): void {
    this.initMap();
    this.makeMarkers();
  }

  ngOnChanges(changes: SimpleChanges): void {
  if (changes['cityName']) {
    this.currentCity = CITIES.find(city => city.name === this.cityName) ?? CITIES[DEFAULT_CITY_INDEX];
    this.updateMap();
  }
    // if (changes.cityOffers) {
    //   this.removeMarkers();
    //   this.makeMarkers();
    // }
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.currentCity.location.latitude, this.currentCity.location.longitude],
      zoom: this.currentCity.location.zoom,
    });

    const tiles = L.tileLayer(M.TileLayerParam.Argument, {
      attribution: M.TileLayerParam.Attribution,
    });

    tiles.addTo(this.map);
  }

  private updateMap(): void {
    if (this.map) {
      this.map.remove();
      this.initMap();
      this.makeMarkers();
    }
  }

  private removeMarkers(): void {
    this.markers.forEach(marker => marker.remove());
    this.markers = [];
  }

  private makeMarkers(): void {
    this.removeMarkers();

    this.cityOffers.forEach((point) => {
      const marker = L.marker(
        {
          lat: point.location.latitude,
          lng: point.location.longitude,
        },
        {
          icon: point.id === this.selectedOfferId ? currentCustomIcon : defaultCustomIcon,
        }
      );

      marker.addTo(this.map!);
      this.markers.push(marker);
    });
  }
}
