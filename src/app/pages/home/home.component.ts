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
import { Observable } from 'rxjs';
// import {SwiperComponent} from "swiper/angular";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  best_seller_items: any;
  two_horizontal_ads: any;
  wow_off_items: any;
  forth_container_leftSide_bottom_ads: any;
  forth_container_rightSide_bottom_ads: any;
  forth_container_top_ads: any;
  third_ads_small_left_items: any;
  third_ads_small_right_items: any;
  third_ads_big_items: any | Observable<any> = [{ id: '', img: '' }];
  swiperConfig: any;
  titles: any;
  location = false;
  overlay = false;
  sidebarWidth = "300px";
  firstSliderItems: any;

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

    this.http.getAll("firstSliderItems").subscribe(res => {
      this.firstSliderItems = res;
    })
    this.http.getAll("titles").subscribe(res => {
      this.titles = res;
    })
    this.http.getAll("third_ads_big_items").subscribe(res => {
      this.third_ads_big_items = res;
    })
    this.http.getAll("third_ads_small_right_items").subscribe(res => {
      this.third_ads_small_right_items = res;
    })
    this.http.getAll("third_ads_small_left_items").subscribe(res => {
      this.third_ads_small_left_items = res;
    })
    this.http.getAll("forth_container_top_ads").subscribe(res => {
      this.forth_container_top_ads = res;
    })
    this.http.getAll("forth_container_rightSide_bottom_ads").subscribe(res => {
      this.forth_container_rightSide_bottom_ads = res;
    })
    this.http.getAll("forth_container_leftSide_bottom_ads").subscribe(res => {
      this.forth_container_leftSide_bottom_ads = res;
    })
    this.http.getAll("wow_off_items").subscribe(res => {
      this.wow_off_items = res;
    })
    this.http.getAll("two_horizontal_ads").subscribe(res => {
      this.two_horizontal_ads = res;
    })
    this.http.getAll("best_seller_items").subscribe(res => {
      this.best_seller_items = res;
    })

  }

  navigateToFilter(value: string) {
    this.filterSrv.filterData = value;
    this.filterSrv.SubjectFilterData.next(value);
    this.router.navigate(['filter'])
  }

}
