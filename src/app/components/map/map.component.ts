import { Component, AfterViewInit } from '@angular/core';
// import { Map, TileLayer, Icon, Marker, layerGroup } from 'leaflet';
import * as L from 'leaflet';
import { TileLayerParam, MAP_HEIGHT, MAP_WIDTH } from './const';
import 'leaflet/dist/leaflet.css';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {
  mapHeight = MAP_HEIGHT;
  mapWidth = MAP_WIDTH;

  private map: L.Map | undefined;

  private initMap(): void {
    this.map = L.map('map', {
      center: {
        lat: 52.37454,    //city.location.latitude,
        lng: 4.897976,  //city.location.longitude
      },
      zoom: 13, //city.location.zoom
    });

    const tiles = L.tileLayer(TileLayerParam.Argument, {
      attribution: TileLayerParam.Attribution,
    });

    tiles.addTo(this.map);
  }

  // constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
