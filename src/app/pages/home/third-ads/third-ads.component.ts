import { Observable, forkJoin, Subscription } from 'rxjs';
import { HttpService } from './../../../services/http/http.service';
import { FilterService } from './../../../services/filter/filter.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-third-ads',
  templateUrl: './third-ads.component.html',
  styleUrls: ['./third-ads.component.css']
})
export class ThirdAdsComponent implements OnInit, OnDestroy {
  third_ads_small_left_items: any;
  third_ads_small_right_items: any;
  third_ads_big_items: any = [{ id: '', img: '' }];
  subcription: Subscription;
  sources: any;

  constructor(private http: HttpService,
    private filterSrv: FilterService,
    private router: Router) { }

  ngOnInit(): void {
    this.sources = [
      this.http.getAll("third_ads_big_items"),
      this.http.getAll("third_ads_small_right_items"),
      this.http.getAll("third_ads_small_left_items")
    ]

    this.subcription = forkJoin(this.sources).subscribe((res: any) => {
      this.third_ads_big_items = res[0];
      this.third_ads_small_right_items = res[1];
      this.third_ads_small_left_items = res[2];
    })
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
