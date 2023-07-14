import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-modal-items',
  templateUrl: './modal-items.component.html',
  styleUrls: ['./modal-items.component.css']
})
export class ModalItemsComponent implements OnInit {

  @Output() close = new EventEmitter<string>();
  @Input() content: any;
  title = "";
  items: any;

  ngOnInit(): void {
    this.title = this.content.text;
    this.items = this.content.items;
  }

  onRadioInput(event: any) {
    this.content.choosen = event.target.id;
    this.close.emit(this.content);
  }

  closeDialog() {
    this.close.emit("close");
  }
}
