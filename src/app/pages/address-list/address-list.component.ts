import { latLng } from 'leaflet';
import { Component } from '@angular/core';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent {

  addresses = [
    {
      lat: "36.3525",
      lng: "50.3525"
    },
    {
      lat: "35.3525",
      lng: "52.3525"
    },
    {
      lat: "32.3525",
      lng: "54.3525"
    }
  ]
}
