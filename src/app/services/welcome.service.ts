import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { WelcomeContent } from '../_models/index';

@Injectable()
export class WelcomeService {
   private _welcomeurl = 'http://dev-tennessee-river-valley.pantheonsite.io/tva-services/welcome?_format=json';
   constructor(private _http: Http) {}

   getWelcome(): Observable<WelcomeContent[]> {
      return this._http.get(this._welcomeurl)
      .map((response: Response) => <WelcomeContent[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }
}
