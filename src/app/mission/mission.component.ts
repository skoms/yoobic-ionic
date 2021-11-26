import { Component, Input, OnInit } from '@angular/core';
import { Mission } from '../missions';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
})
export class MissionComponent implements OnInit {
  @Input() mission: Mission;
  constructor() {}

  ngOnInit() {}
}
