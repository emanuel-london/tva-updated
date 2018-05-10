import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LevelsService {
  constructor(private http: Http) {

  }

  getLevels() {
    return this.http.get('http://dev-tennessee-river-valley.pantheonsite.io/tva-services/level-menu?_format=json')
    .map(res => res.json());
  }
}
