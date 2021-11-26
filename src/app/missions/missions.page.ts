import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { Mission } from '../missions';
import { MissionService } from '../services/mission.service';

@Component({
  selector: 'app-missions',
  templateUrl: 'missions.page.html',
  styleUrls: ['missions.page.scss'],
})
export class MissionsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent) content: IonContent;
  missions: Mission[] = [];
  constructor(private missionService: MissionService) {}

  ngOnInit() {
    this.getMissions();
  }

  public loadMore() {
    this.getMissions().then(() => {
      this.infiniteScroll.complete();

      if (this.missions.length >= 30) {
        this.infiniteScroll.disabled = true;
      }
    });
  }

  public backToTop() {
    this.content
      .getScrollElement()
      .then((res) => res.scroll({ top: 0, left: 0, behavior: 'smooth' }));
  }

  private async getMissions() {
    return this.missionService
      .getMissions()
      .subscribe((missions) => (this.missions = missions));
  }
}
