import {Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


const GEOLOCATION_ERRORS = {
	'errors.location.unsupportedBrowser': 'Browser does not support location services',
	'errors.location.permissionDenied': 'You have rejected access to your location',
	'errors.location.positionUnavailable': 'Unable to determine your location',
	'errors.location.timeout': 'Service timeout has been reached'
};

@Injectable()
export class WeatherService {
  constructor(private http: Http) {

  }

    getElevation(lat, lng) {
      return this.http.get('http://dev-tenn-valley-d7.pantheonsite.io/tva-get-weather-data?lat=' + lat + '&lng=' + lng)
      .map(res => res.json());
    }
  }
