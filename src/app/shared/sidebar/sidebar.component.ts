import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() open: boolean = false;
  @Input() maxWidth = "80%";
  @Output() close=new EventEmitter<any>();

  closed() {
    this.close.emit();
    this.open = false;
  }
}
