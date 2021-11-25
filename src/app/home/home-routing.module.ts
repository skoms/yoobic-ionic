import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'missions',
        loadChildren: () =>
          import('../missions/missions.module').then(
            (m) => m.MissionsPageModule
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

// const routes: Routes = [
//   {
//     path: '',
//     component: HomePage
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
