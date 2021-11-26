import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission, RatingObject } from '../missions';
import { MissionService } from '../services/mission.service';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.page.html',
  styleUrls: ['./mission-details.page.scss'],
})
export class MissionDetailsPage implements OnInit {
  @ViewChild('#starRating') starRating: ElementRef;
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
      .then((res) => res.subscribe((m) => (this.mission = m)))
      .then(() => (this.mission.rating = this.getRatingStars()));
  }

  public getRatingStars(): RatingObject {
    if (
      !this.mission.rating.filled &&
      !this.mission.rating.halfFilled &&
      !this.mission.rating.empty
    ) {
      let rating = this.mission.rating.decimal;
      let starCount = 0;

      let filled = 0;
      let halfFilled = 0;
      let empty = 0;

      while (starCount < 5) {
        if (rating >= 1) {
          filled++;
          starCount++;
          rating -= 1;
        } else if (rating >= 0.5) {
          halfFilled++;
          starCount++;
          rating -= 0.5;
        } else {
          empty++;
          starCount++;
        }
      }
      return {
        decimal: this.mission.rating.decimal,
        filled: new Array(filled).fill('*'),
        halfFilled: new Array(halfFilled).fill('*'),
        empty: new Array(empty).fill('*'),
      };
    }
  }
}
