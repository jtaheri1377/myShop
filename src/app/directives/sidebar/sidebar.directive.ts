import { Directive, Output, Renderer2, ElementRef, Input, DoCheck } from '@angular/core';

@Directive({
  selector: '[sidebar]'
})
export class SidebarDirective implements DoCheck {
  @Input() open: boolean;
  @Input() maxWidth: string;

  constructor(private renderer: Renderer2, private ElRef: ElementRef) { }

  ngDoCheck(): void {
    if (this.open) {
      this.renderer.setStyle(this.ElRef.nativeElement, "transition", " all .2s ease-in-out, opacity .8s");
      this.renderer.setStyle(this.ElRef.nativeElement, "visibility", "visible");
      this.renderer.setStyle(this.ElRef.nativeElement, "zIndex", "2");
      this.renderer.setStyle(this.ElRef.nativeElement, "opacity", "1");
      this.renderer.setStyle(this.ElRef.nativeElement, "width", this.maxWidth);

    }
    else {
      this.renderer.setStyle(this.ElRef.nativeElement, "transition", "all .2s ease-in-out, opacity .12s");
      this.renderer.setStyle(this.ElRef.nativeElement, "zIndex", "-1");
      this.renderer.setStyle(this.ElRef.nativeElement, "width", "0");
      this.renderer.setStyle(this.ElRef.nativeElement, "opacity", "0");
      this.renderer.setStyle(this.ElRef.nativeElement, "visibility", "hidden");

    }
  }

}
