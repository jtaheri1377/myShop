import { Component, Output, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  hasProducts: boolean = false;

  @Input() products = [];

  ngOnInit(): void {
    if (this.products[0])
      this.hasProducts = true;
    else
      this.hasProducts = false;
  }
}
