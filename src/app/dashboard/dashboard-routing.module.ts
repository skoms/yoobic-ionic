import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'missions',
        loadChildren: () =>
          import('../missions/missions.module').then(
            (m) => m.MissionsPageModule
          ),
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('../chat/chat-routing.module').then(
            (m) => m.ChatPageRoutingModule
          ),
      },
      {
        path: 'photos',
        loadChildren: () =>
          import('../photos/photos-routing.module').then(
            (m) => m.PhotosPageRoutingModule
          ),
      },
      {
        path: 'notes',
        loadChildren: () =>
          import('../notes/notes.module').then((m) => m.NotesPageModule),
      },
      {
        path: 'request',
        loadChildren: () =>
          import('../request/request.module').then((m) => m.RequestPageModule),
      },
      {
        path: 'details/:id',
        loadChildren: () =>
          import('../mission-details/mission-details.module').then(
            (m) => m.MissionDetailsPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/dashboard/missions',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard/missions',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
