import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-horizontal-ads',
  templateUrl: './two-horizontal-ads.component.html',
  styleUrls: ['./two-horizontal-ads.component.css']
})
export class TwoHorizontalAdsComponent {

  @Input() items = [];
}
