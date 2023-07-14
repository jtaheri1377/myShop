import { HttpService } from './../../services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  addedToBag: boolean = false;
  comments: any;
  product_details: any;
  suggestions: any;
  mainImage: any;
  images = [];
  location = false;
  productid: any;
  suggestedProducts: any;
  productSpecifies = [];

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpService) { }

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.productid = res['id'];
      this.http.getAll("products/" + res['id']).subscribe((result: any) => {
        this.product_details = result;
        this.images = this.product_details['images'];
        this.mainImage = this.product_details['images'][0];
        this.suggestions = this.product_details['suggesteds'];
        this.productSpecifies = this.product_details['specifies'];
        this.comments = this.product_details['comments'];
      })
      this.http.search('user_basket', ['pId'], [this.productid]).subscribe((res: any) => {
        this.addedToBag = res.length ? true : false;
      })
    })


  }

  navigate(id: string) {
    this.router.navigate(['detail', id])
  }

  scrollToTop(el: HTMLElement) {
    el.scrollIntoView();
  }

  addToBag() {
    if (this.addedToBag)
      return;
    let product = {
      pId: this.productid,
      name: this.product_details.name,
      price: this.product_details.price,
      desc: this.product_details.desc,
      amount: 1,
      img: this.product_details.images[0]
    }

    this.http.add("user_basket", product).subscribe((res: any) => {
      this.ngOnInit();
    })
  }
}
