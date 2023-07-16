import { Router } from '@angular/router';
import { FilterService } from './../../../services/filter/filter.service';
import { HttpService } from './../../../services/http/http.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit, OnDestroy {
  titles: any = [];
  subcription: Subscription;

  constructor(private http: HttpService,
    private filterSrv: FilterService,
    private router: Router) { }

  ngOnInit(): void {
    this.subcription = this.http.getAll("titles").subscribe(res => {
      this.titles = res;
    })
  }

  navigateToFilter(value: string) {
    this.filterSrv.filterData = value;
    this.filterSrv.SubjectFilterData.next(value);
    this.router.navigate(['filter'])
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
