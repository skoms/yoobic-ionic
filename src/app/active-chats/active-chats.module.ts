import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveChatsPageRoutingModule } from './active-chats-routing.module';

import { ActiveChatsPage } from './active-chats.page';
import { ChatPreviewComponent } from '../chat-preview/chat-preview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveChatsPageRoutingModule,
  ],
  declarations: [ActiveChatsPage, ChatPreviewComponent],
})
export class ActiveChatsPageModule {}
