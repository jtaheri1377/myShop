import { HttpService } from './../../../services/http/http.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-first-slider',
  templateUrl: './first-slider.component.html',
  styleUrls: ['./first-slider.component.css']
})
export class FirstSliderComponent implements OnInit ,OnDestroy {
  firstSliderItems: any = [];
  subcription: Subscription;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.subcription = this.http.getAll("firstSliderItems").subscribe(res => {
      this.firstSliderItems = res;
    })
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
