import { HttpClient } from '@angular/common/http';
import { HttpService } from './../../services/http/http.service';
import { Component, Output, EventEmitter, OnInit, DoCheck, Input } from '@angular/core';
import * as L from 'leaflet';

import { Icon, icon, latLng, marker, polyline, tileLayer, Map, point, LatLng, Marker, MarkerOptions } from 'leaflet';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {

  @Output() closed = new EventEmitter<any>();
  @Output() noLocationVerified = new EventEmitter<any>();
  @Input() LVisible: boolean;


  disableMouseMove: any;
  title = 'Map';
  latlng: LatLng = latLng(34.64100245954529, 50.87936192750931);
  map: L.Map;
  CenterMarker: any;
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        // subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],

      })
    ],
    zoom: 18,
    center: latLng([35.69970372674073, 51.33785605430604]),
  };

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    if (this.LVisible)
      this.http.getAll("user_currentaddress").subscribe((res: any) => {
        console.log(res[0].lat, res[0].lng)
        this.flyToPoint(res[0].lat, res[0].lng);
      })
  }

  getCurrentLocation() {
    // get current location with Gps
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setLocation(position.coords.latitude, position.coords.longitude, true);
      },
        error => {
          window.alert("دسترسی به موقعیت شما امکان پذیر نمی باشد. لطفا روی نقشه مکان خود را مشخص کنید")
          console.log(error.message);
        })
    } else {
      window.alert("No support for geolocation");
      console.log("No support for geolocation")
    }
  }

  setLocation(lat?: number, lng?: number, fly = false) {
    if (lat && lng) {
      this.latlng.lat = lat;
      this.latlng.lng = lng;
      // this.mapSelected = true
      if (fly) {
        this.flyToPoint(lat, lng);
      }
    }
  }

  flyToPoint(lat?: number, lng?: number) {
    if (lat && lng) {
      this.map.flyTo([lat, lng], 18, {
        animate: true,
        duration: 3
      });
      // L.marker([lat, lng]).addTo(this.map); // add the marker onclick
      // this.layer = marker([lat, lng], {
      //   draggable: true,
      //   opacity: 100
      // });
    }
  }

  onMapReady(map: L.Map) {
    this.map = map;
    var latLng = this.map.getCenter();
    var greenIcon = new Icon({
      iconUrl: 'https://icons.veryicon.com/png/o/brands/linear-icon-29/location-207.png',
      iconSize: [90, 90],
      iconAnchor: [45, 75]
    })
    this.CenterMarker = L.marker([latLng.lat, latLng.lng], { icon: greenIcon }).addTo(this.map);

    this.map.on('move', e => {
      var latLng = this.map.getCenter()
      this.CenterMarker.setLatLng([latLng.lat, latLng.lng]);
    })

    // this.map.on('zoomstart', e => {
    //   map.addEventListener("mousemove", e => {
    //     if (!this.disableMouseMove) {
    //       latLng = e.latlng;
    //     }
    //   });
    // });

    // this.map.on('zoomend', e => {
    //   if (!this.disableMouseMove) {
    //     this.map.flyTo([latLng.lat, latLng.lng], e.target._zoom, {
    //       animate: false,
    //       duration: 0
    //     })
    //   }
    //   else
    //     this.disableMouseMove = false;
    // })

  }

  close(locationChoosed: boolean) {
    if (locationChoosed) {
      this.http.update("user_currentaddress", "0", this.map.getCenter()).subscribe((res: any) => {
      })
      console.log(this.map.getCenter());
      this.closed.emit(this.map.getCenter());

    } else
      this.closed.emit();


  }
}
