import { Directive, Input, DoCheck, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[overlay]'
})
export class OverlayDirective implements DoCheck {
  @Input() isOpen: any;

  constructor(private elref: ElementRef, private renderer: Renderer2) { }

  ngDoCheck(): void {
    if (!this.isOpen) {
      // debugger;
      // this.renderer.setStyle(this.elref.nativeElement,'position', 'static');
      this.renderer.setStyle(this.elref.nativeElement, 'opacity', '0');
      this.renderer.setStyle(this.elref.nativeElement, 'visibility', 'hidden');
      this.renderer.setStyle(this.elref.nativeElement, 'zIndex', '-1');
      this.renderer.setStyle(this.elref.nativeElement, 'transition', 'width 0.1s opacity .2s ease-in-out');

    }
    else {
      // debugger;

      // this.renderer.setStyle(this.elref.nativeElement,'position', 'fixed');
      this.renderer.setStyle(this.elref.nativeElement, 'opacity', '1');
      this.renderer.setStyle(this.elref.nativeElement, 'visibility', 'visible');
      this.renderer.setStyle(this.elref.nativeElement, 'zIndex', '20 !important');
      this.renderer.setStyle(this.elref.nativeElement, 'transition', 'all 0.2s ease-in-out');

    }
  }
}
