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

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getMission(Number(id));
  }

  public getMission(id: number) {
    this.missionService
      .getMission(id)
      .then((res) => res.subscribe((m) => (this.mission = m)))
      .then(() => {
        if (this.mission !== null) {
          this.mission.rating = this.getRatingStars();
        }
      });
  }

  public getRatingStars(): RatingObject {
    const { filled, halfFilled, empty, decimal } = this.mission.rating;
    if (!filled && !halfFilled && !empty) {
      let rating = decimal;
      const [filledStars, halfFilledStars, emptyStars] = [[], [], []];

      while ([...filledStars, ...halfFilledStars, ...emptyStars].length < 5) {
        if (rating >= 1) {
          filledStars.push('*');
          rating--;
        } else if (rating >= 0.5) {
          halfFilledStars.push('*');
          rating -= 0.5;
        } else {
          emptyStars.push('*');
        }
      }
      return {
        decimal,
        filled: filledStars,
        halfFilled: halfFilledStars,
        empty: emptyStars,
      };
    }
  }
}
