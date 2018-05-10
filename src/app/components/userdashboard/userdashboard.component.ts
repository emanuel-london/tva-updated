import { Component, ViewChild, OnInit } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './userdashboard.component.html',
})
// tslint:disable-next-line:component-class-suffix
export class UserDashboard implements OnInit {
  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  public show = true;
  // tslint:disable-next-line:member-ordering
  public type = 'component';

    // tslint:disable-next-line:member-ordering
    public disabled = false;

    // tslint:disable-next-line:member-ordering
    public config: SwiperConfigInterface = {
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
      },
    };



}
