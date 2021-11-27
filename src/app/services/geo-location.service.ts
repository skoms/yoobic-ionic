import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GeoLoc } from '../missions';
import { getDistance } from 'geolib';

@Injectable({
  providedIn: 'root',
})
export class GeoLocationService {
  currentLocation: GeoLoc;
  constructor(private geolocation: Geolocation) {}

  public async getDistance(destination: GeoLoc) {
    await this.setCurrentLocation();
    return this.convertToMiles(getDistance(this.currentLocation, destination));
  }

  private async setCurrentLocation() {
    return await this.geolocation.getCurrentPosition().then((res) => {
      this.currentLocation = {
        latitude: res.coords.latitude,
        longitude: res.coords.longitude,
      };
    });
  }

  private convertToMiles(meters: number) {
    return (meters / 1609.344).toFixed(1);
  }
}
