import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MissionsPage } from './missions.page';
import { MissionComponent } from '../mission/mission.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MissionsPage }]),
  ],
  declarations: [MissionsPage, MissionComponent],
})
export class MissionsPageModule {}
