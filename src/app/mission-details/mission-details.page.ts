import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../missions';
import { MissionService } from '../services/mission.service';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.page.html',
  styleUrls: ['./mission-details.page.scss'],
})
export class MissionDetailsPage implements OnInit {
  mission?: Mission;
  constructor(
    private missionService: MissionService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getMission(Number(id));
  }

  public getMission(id: number) {
    this.missionService
      .getMission(id)
      .then((res) => res.subscribe((m) => (this.mission = m)));
  }

  public getRatingStars() {
    let rating = this.mission.rating;
    let starDiv = '<div class="rating-stars">';
    let starCount = 0;
    while (rating >= 0.5 && starCount < 5) {
      if (rating > 1) {
        starDiv += '<ion-icon name="star"></ion-icon>';
        starCount++;
        rating -= 1;
      } else if (rating > 0.5) {
        starDiv += '<ion-icon name="star-half"></ion-icon>';
        starCount++;
        rating -= 0.5;
      } else {
        starDiv += '<ion-icon name="star-outline"></ion-icon>';
        starCount++;
      }
    }
    starDiv += '</div>';
    return starDiv;
  }
}
