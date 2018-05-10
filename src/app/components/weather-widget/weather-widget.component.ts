import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { WeatherService } from '../../services/index';

/*@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  providers: [WeatherService, RealtimeGeolocationService]
})*/
@Component({
    selector: 'app-weather-widget',
    templateUrl: './weather-widget.component.html',
    providers: [WeatherService]
  })
  export class WeatherWidgetComponent implements OnInit {

    public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;
    public weatherdata: {};

    @ViewChild("search")
    public searchElementRef: ElementRef;

    constructor(
      private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone,
      private weatherservice: WeatherService
    ) {}

    ngOnInit() {
      //set google maps defaults
      this.zoom = 4;
      this.latitude = 39.8282;
      this.longitude = -98.5795;
      this.weatherdata = {
        boo: "hoo"
      };

      //create search FormControl
      this.searchControl = new FormControl();

      //set current position
      this.setCurrentPosition(this.weatherservice);

      //load Places Autocomplete
      // Get elevation datab


    }

    private setCurrentPosition(weather) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 12;
          weather.getElevation(this.latitude, this.longitude).subscribe(weatherdata => {
             this.weatherdata = weatherdata;
          });
        });
      }
    }
  }
