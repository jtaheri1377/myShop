import { Router } from '@angular/router';
import { FilterService } from './../../services/filter/filter.service';
import { HttpService } from './../../services/http/http.service';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  SwiperOptions,
} from 'swiper';
// import { BehaviorSubject } from "rxjs";
import Swiper from "swiper/types/swiper-class";
import { Observable, forkJoin } from 'rxjs';
// import {SwiperComponent} from "swiper/angular";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  newProducts: any;
  best_seller_items: any;
  two_horizontal_ads: any;
  wow_off_items: any;
  swiperConfig: any;
  location = false;
  overlay = false;
  sidebarWidth = "300px";
  sources = [
    this.http.getAll("wow_off_items"),
    this.http.getAll("wow_off_items"),
    this.http.getAll("best_seller_items"),
    this.http.getAll("two_horizontal_ads"),
  ]

  constructor(private http: HttpService,
    private filterSrv: FilterService,
    private router: Router) { }

  ngOnInit(): void {
    this.swiperConfig = {
      loop: true,
      speed: 300,
      autoplay: true,
      mousewheel: true,
      navigation: true,
      pagination: { clickable: true },
      // scrollbar: { draggable: true },
      slidesPerView: 1,
      breakpoints: {
        100: {
          // slidesPerView: 2,
          spaceBetween: 20
        },
        200: {
          // slidesPerView: 3,
          spaceBetween: 20
        },
        300: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      }
    };

    forkJoin(this.sources).subscribe(res => {
      this.wow_off_items = res[0];
      this.newProducts = res[1];
      this.best_seller_items = res[2];
      this.two_horizontal_ads = res[3];
    });
  }
}
