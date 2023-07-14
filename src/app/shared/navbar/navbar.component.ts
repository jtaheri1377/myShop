import { HttpService } from './../../services/http/http.service';
import { FilterService } from './../../services/filter/filter.service';
import { Component, OnInit, ViewChild, ElementRef, DoCheck, Output, EventEmitter } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() SidebarClick = new EventEmitter<boolean>();
  @Output() showLocation = new EventEmitter<boolean>();
  @Output() TextChange = new EventEmitter<string>();
  userEntered_SuggestionsBox = false;
  suggestionBoxImg_id: any;
  suggestionBoxImg_img: any;
  suggestionVisible = false;
  suggestionClicked = false;
  basketCount: number = 0;
  suggestions: any;
  filterText = "";
  searchForm: any;
  sidebar = true;

  constructor(private filterSrc: FilterService,
    private http: HttpService,
    private router: Router,
    private route: ActivatedRoute) {
    router.events.subscribe((val) => {
      this.onNavbarEnter(true)
    });
  }

  onNavbarEnter(isOutside: boolean) {
    if (isOutside)
      this.suggestionVisible = false;
    else {
      if (!this.suggestionClicked) {
        this.suggestionVisible = true;
      }
      else {
        this.suggestionVisible = false;
        this.suggestionClicked = false;
      }
    }
  }
  ngOnInit(): void {
    console.log(this.route)
    this.filterText = this.filterSrc.filterData;
    this.filterSrc.SubjectFilterData.subscribe(res => this.filterText = res)
    this.searchForm = new FormGroup({
      'searchText': new FormControl(this.filterText, null)
    });

    this.http.getAll('user_basket').subscribe((res: any) => {
      // debugger;
      this.basketCount = res.length;
    })
    this.http.getAll('suggestions').subscribe((res: any) => {
      // debugger;
      this.suggestions = res;
    })
    this.http.getAll('suggestionBoxImg').subscribe((res: any) => {
      // debugger;
      this.suggestionBoxImg_id = res[0].id;
      this.suggestionBoxImg_img = res[0].img;

    })
    // this.route.data.subscribe((res: any) => {
    //   console.log(res)
    //   debugger
    // })
  }

  SearchInput(value: any) {
    if (!value.data) {
      this.onNavbarEnter(false);
    }
  }

  onLocationIconClick() {
    this.showLocation.emit(true);
  }

  SidebarIconClicked() {
    this.sidebar != this.sidebar;
    this.SidebarClick.emit(this.sidebar);
  }

  homeIcon() {
    if (this.route.snapshot['_routerState'].url.length == 1)
      return false;
    else
      return true;
  }

  onSubmit() {
    this.filterSrc.filterData = this.searchForm.value.searchText;
    this.ngOnInit()
    // this.TextChange.emit(this.searchForm.value.searchText);
    this.filterSrc.SubjectFilterData.next(this.searchForm.value.searchText);
    this.onNavbarEnter(true);
    this.router.navigate(['filter']);
  }

  onSuggestionClick(value: string) {
    this.suggestionClicked = true;
    this.searchForm.value.searchText = value;
    this.onSubmit();
  }

}
