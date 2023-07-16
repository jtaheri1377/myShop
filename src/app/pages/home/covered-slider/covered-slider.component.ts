import { Component, Input, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-covered-slider',
  templateUrl: './covered-slider.component.html',
  styleUrls: ['./covered-slider.component.css']
})
export class CoveredSliderComponent {
  @Input() items = [];
  @Input() coverTitle = "";
  @Input() bgColor: string;
  @ViewChild('container') container: ElementRef;

  constructor(private renderer: Renderer2, private elref: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.container.nativeElement, 'background', this.bgColor);
  }
}
