import { HttpService } from './../../services/http/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  location: boolean = false;
  pdLength: any;
  products = [];

  constructor(private http: HttpService) {

  }

  ngOnInit(): void {
    this.http.getAll('user_basket').subscribe((res: any) => {
      this.pdLength = res.length;
      this.products = res;
    })
  }


  getHeight() {
    if (this.location) {
      return '100vh';
    }
    else {
      return '100%'
    }
  }

  getOverflow() {
    if (this.location) {
      return 'hidden';
    }
    else {
      return 'auto'
    }
  }

  onClose_LocationBox(result: any) {
    console.log("onClose_LocationBox")
    this.location = false;
    if (result)
      alert("آدرس انتخاب شد" + result);
  }

  deleteIcon(value: number) {
    return value < 2 ? true : false;
  }

  increase(id: any) {
    var index = this.products.findIndex(res => { return res.id === id })
    this.products[index]['amount'] += 1;
    this.http.update('user_basket/', id, this.products[index]).subscribe(() => {
    })
  }

  decrease(id: any) {
    var index = this.products.findIndex(res => { return res.id === id })
    this.products[index]['amount'] -= 1;
    this.http.update('user_basket', id, this.products[index]).subscribe(() => {
    })
  }

  delete(id: any) {
    // var index = this.products.findIndex(res => { return res.id === id })
    // this.products.splice(index, 1);
    this.http.delte('user_basket', id).subscribe(res => {
      console.log(res)
      this.ngOnInit();
    });
  }

  getSum() {
    let result = 0;
    this.products.forEach(product => {
      result += +product.price * product.amount;
    });
    return result;
  }



}
