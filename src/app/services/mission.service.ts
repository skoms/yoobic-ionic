import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { MISSIONS, Mission } from '../missions';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  missions: Mission[] = [];
  constructor(private storage: StorageService, private router: Router) {}

  public saveMissions(missions: Mission[]) {
    this.storage.set('missions', missions);
  }

  public async getMission(id: number): Promise<Observable<Mission>> {
    const missions: Mission[] = await this.storage.get('missions');
    const mission = missions.find((m) => m.id === id);
    return of(mission); // Used for easy server implementation down the line
  }

  public getMissions(): Observable<Mission[]> {
    this.missions = [...this.missions, ...MISSIONS];
    return of(this.missions); // Used for easy server implementation down the line
  }

  public clearMissions(): void {
    this.missions = [];
  }
}
