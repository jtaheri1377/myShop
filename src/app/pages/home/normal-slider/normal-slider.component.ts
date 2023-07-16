import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-normal-slider',
  templateUrl: './normal-slider.component.html',
  styleUrls: ['./normal-slider.component.css']
})
export class NormalSliderComponent {

  @Input() items = [];
  @Input() title = "";

}
