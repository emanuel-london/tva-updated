import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/index';
import { GeoJson } from '../../_models/index';
import { ActivatedRoute } from '@angular/router';
import { NgxMapboxGLModule, MapEvent} from 'ngx-mapbox-gl';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class MapComponent implements OnInit {
 center =  [-85.33973693847656 + (Math.random() - 0.5) * 2, + (Math.random() - 0.5) * 2];
  constructor(  ) {}
  map: MapEvent; // Mapbox GL Map object (Mapbox is ran outside angular zone, keep that in mind when binding events from this object)

  ngOnInit() {

 }
 alert() {
   const latone = -85.33973693847656 + (Math.random() - 0.5) * 2;
   const lattwo = latone + (Math.random() - 0.5) * 2;
   const totallat = 'latone , lattwo';
   return totallat;
  }
}
