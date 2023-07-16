import { Subscription, forkJoin } from 'rxjs';
import { Router } from '@angular/router';
import { FilterService } from './../../../services/filter/filter.service';
import { HttpService } from './../../../services/http/http.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-forth-container',
  templateUrl: './forth-container.component.html',
  styleUrls: ['./forth-container.component.css']
})
export class ForthContainerComponent implements OnInit, OnDestroy {
  forth_container_leftSide_bottom_ads: any;
  forth_container_rightSide_bottom_ads: any;
  forth_container_top_ads: any;
  subscription: Subscription;

  sources: any[] = [
    this.http.getAll("forth_container_top_ads"),
    this.http.getAll("forth_container_rightSide_bottom_ads"),
    this.http.getAll("forth_container_leftSide_bottom_ads"),
  ];

  constructor(private http: HttpService,
    private filterSrv: FilterService,
    private router: Router) { }

  ngOnInit(): void {
    this.subscription = forkJoin(this.sources).subscribe(res => {
      this.forth_container_top_ads = res[0];
      this.forth_container_rightSide_bottom_ads = res[1];
      this.forth_container_leftSide_bottom_ads = res[2];
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
