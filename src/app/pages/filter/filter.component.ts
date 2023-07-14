import { HttpService } from './../../services/http/http.service';
import { FilterService } from './../../services/filter/filter.service';
import { Component, OnDestroy, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnDestroy {
  products: any[] = [];
  location: boolean = false;
  SideBar_visible = false;
  modal_visibility = false;
  filter_item: any;
  hasProducts: any;
  filter_dialog_result = "";
  choosenId: any;
  choosen = {};

  constructor(private filterSrc: FilterService, private http: HttpService) { }

  ngOnInit(): void {
    if (!this.filterSrc.filterData) {
      this.http.getAll('products').subscribe((res: any) => {
        this.products = res;

        if (this.products[0])
          this.hasProducts = true;
        else {

          this.hasProducts = false;
        }
      })
    }
    else {
      this.onNavbarFilter(this.filterSrc.filterData);
    }
    this.filterSrc.SubjectFilterData.subscribe(res => {
      ;
      this.onNavbarFilter(res);
    })
  }

  onNavbarFilter(searchValue: string) {
    if (searchValue) {
      this.http.search('products', ['name'], [searchValue]).subscribe((result: any) => {
        this.products = result;

        if (this.products.length > 0) {
          this.hasProducts = true;
        } else {
          this.http.search('categories', ['name'], [searchValue]).subscribe((response: any) => {
            if (response.length > 0) {
              var categoryId = response[0].id;
              this.http.search('products', ['categoryId'], [categoryId]).subscribe((res: any) => {
                this.products = res;

                this.hasProducts = true;
              })
            } else {

              this.hasProducts = false;
            }
          });
        }
      })
    }
    else {
      this.http.getAll('products').subscribe((res: any) => {
        this.products = res;
        if (this.products[0])
          this.hasProducts = true;
        else
          this.hasProducts = false;
      })
    }
  }

  getHeight() {
    if (this.location || this.modal_visibility) {
      return '100vh';
    }
    else {
      return '100%'
    }
  }

  getOverflow() {
    if (this.location || this.modal_visibility) {
      return 'hidden';
    }
    else {
      return 'auto'
    }
  }

  ondialogClosed(res: string) {
    if (res != "close") {
      this.choosen = res;
    }
    this.modal_visibility = false;
  }

  onChoosedItem(item: any) {
    this.filter_item = item;
    this.modal_visibility = true;
  }

  ngOnDestroy(): void {
    this.filterSrc.filterData = "";
    this.filterSrc.SubjectFilterData.next("");
  }
}
