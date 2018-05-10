import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule, Form } from '@angular/forms'; // <-- NgModel lives here\
import { ReactiveFormsModule } from '@angular/forms'; // <--- Reactive Forms--->
import { HttpModule } from '@angular/http';
import { JcfModule } from 'angular2-jcf-directive';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  slidesPerView: 4,
  spaceBetween: 10,
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is <= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
};

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService, MapService } from './services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AppComponent } from './app.component';

import {
        RiverTrekContentsComponent,
        LevelComponent,
        MapComponent,
        RiverTrekStartComponent,
        TrekContentsComponent,
        StartComponent,
        AreaComponent,
        SliderComponent,
        UserDashboard,
        SelectBandComponent,
        WelcomeComponent,
        UserNavComponent,
      } from './components/index';






@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    AreaComponent,
    StartComponent,
    TrekContentsComponent,
    RiverTrekStartComponent,
    RiverTrekContentsComponent,
    SliderComponent,
    UserNavComponent,
    WelcomeComponent,
    SelectBandComponent,
    UserDashboard,
    MapComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // Custom Modules
    JcfModule,
    HttpClientModule,
    SwiperModule,
    ReactiveFormsModule,
    HttpModule,
    SwiperModule,
    NgxMapboxGLModule.forRoot({
      // tslint:disable-next-line:max-line-length
    accessToken: 'pk.eyJ1IjoiY29udGVudHNjaWVuY2UiLCJhIjoiY2o2ejVndm9yMjdyZzMzczYwdGh2ZHYyZSJ9.KTnjS1mgEkRatw5noEpYvw', // Can also be set per map (accessToken input of mgl-map)
      // tslint:disable-next-line:max-line-length
    geocoderAccessToken: 'TOKEN' // Optionnal, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    })
],
  providers: [
  //  MapService,
   // GeocodingService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    MapService,
   {
     provide: SWIPER_CONFIG,
     useValue: DEFAULT_SWIPER_CONFIG
   },
   {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
},
 fakeBackendProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
