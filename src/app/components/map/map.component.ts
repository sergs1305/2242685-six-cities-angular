import { Component, AfterViewInit, Input } from '@angular/core';
// import { Map, TileLayer, Icon, Marker, layerGroup } from 'leaflet';
import * as L from 'leaflet';
import * as M from './const';
import { City, Offers } from '../../types/types';
import { CITIES, DEFAULT_CITY_INDEX } from '../../const';
import { ICON_HEIGHT, ICON_WIDTH, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './const';
// import 'leaflet/dist/leaflet.css';

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
export class MapComponent implements AfterViewInit {

  @Input() city: City = {
    name: CITIES[DEFAULT_CITY_INDEX],
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 13
    },
  };
  @Input() offers: Offers = [];
  @Input() selectedOfferId: string | undefined;

  mapHeight = M.MAP_HEIGHT;
  mapWidth = M.MAP_WIDTH;

  ngAfterViewInit(): void {
    this.initMap();
    this.makeMarkers();
  }

  private map: L.Map | undefined;

  private initMap(): void {
    this.map = L.map('map', {
      center: [52.37454, 4.897976],
      zoom: 13, //city.location.zoom
    });

    const tiles = L.tileLayer(M.TileLayerParam.Argument, {
      attribution: M.TileLayerParam.Attribution,
    });

    tiles.addTo(this.map);
  }

  private makeMarkers(): void {
    // if (!this.map || !this.offers || this.offers.length === 0) {
    //   return;
    // }

    this.offers.forEach((point) => {
      const marker = L.marker(
        {
          lat: point.location.latitude,
          lng: point.location.longitude,
        },
        {
          icon:
            point.id === this.selectedOfferId ? currentCustomIcon : defaultCustomIcon,
        }
      );

      marker.addTo(this.map!);
    });
  }
  // constructor() { }

}
