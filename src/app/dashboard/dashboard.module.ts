import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { ActiveChatsPage } from '../active-chats/active-chats.page';
import { ChatPreviewComponent } from '../chat-preview/chat-preview.component';
import { PhotosPage } from '../photos/photos.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DashboardPageRoutingModule],
  declarations: [
    DashboardPage,
    ActiveChatsPage,
    ChatPreviewComponent,
    PhotosPage,
  ],
})
export class DashboardPageModule {}
