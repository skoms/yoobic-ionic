import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MISSIONS, Mission } from '../missions';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  missions: Mission[] = [];
  constructor() {}

  public getMissions(): Observable<Mission[]> {
    this.missions = [...this.missions, ...MISSIONS];
    return of(this.missions); // Used for easy server implementation down the line
  }

  public clearMissions(): void {
    this.missions = [];
  }
}
