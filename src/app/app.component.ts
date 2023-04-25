import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'anuTechGMap';
  latitude: number = 18.51957;
  longitude: number = 73.85535;
  map: any;
  marker: any;

  ngAfterViewInit() {
    // Create a Google Maps instance
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: Number(this.latitude), lng: Number(this.longitude) },
      zoom: 8,
    });
    this.marker = new google.maps.Marker({
      position: { lat: Number(this.latitude), lng: Number(this.longitude) },
      map: this.map,
    });
  }

  selectMarker() {
    // Add a click event listener to the map
    this.map.addListener('click', (event: any) => {
      if (this.marker) {
        this.marker.setMap(null);
      }
      this.latitude = event.latLng.lat();
      this.longitude = event.latLng.lng();
      // Add a marker to the clicked location
      this.marker = new google.maps.Marker({
        position: event.latLng,
        map: this.map,
      });
    });
  }

  addMarker() {
    // Remove existing marker (if any)
    if (this.marker) {
      this.marker.setMap(null);
    }
    //Focus on new marker
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: Number(this.latitude), lng: Number(this.longitude) },
      zoom: 8,
    });

    // Create a new marker
    this.marker = new google.maps.Marker({
      position: { lat: Number(this.latitude), lng: Number(this.longitude) },
      map: this.map,
    });
    // Center the map
    this.map.setCenter(this.marker.getPosition());
  }
}
