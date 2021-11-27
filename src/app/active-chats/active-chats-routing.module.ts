import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveChatsPage } from './active-chats.page';

const routes: Routes = [
  {
    path: '',
    component: ActiveChatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveChatsPageRoutingModule {}
