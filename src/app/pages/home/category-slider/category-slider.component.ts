import { HttpService } from './../../../services/http/http.service';
import { FilterService } from './../../../services/filter/filter.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent {

  categories: any;


  constructor(private router: Router,
    private filtersrv: FilterService,
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.http.getAll('titles').subscribe(res => this.categories = res)
  }

  navigateTofilter(value:string) {
    this.filtersrv.filterData = value;
    this.filtersrv.SubjectFilterData.next(value)
    this.router.navigate(['filter'])
  }



}
