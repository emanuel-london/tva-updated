import { Injectable } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { environment } from '../../environments/environment';
import { IActivity } from '../_models/activity.model';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IMarkers } from './map';

@Injectable()
export class MapService {

   private _mapUrl = 'http://dev-tenn-valley-d7.pantheonsite.io/views-datasource/content/river-stops';
   constructor(private _http: Http) {}

   getMarkers(): Observable<IMarkers[]> {
      return this._http.get(this._mapUrl)
      .map((response: Response) => <IMarkers[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }
}
