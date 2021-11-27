import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveChatsPageRoutingModule } from './active-chats-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveChatsPageRoutingModule,
  ],
  declarations: [],
})
export class ActiveChatsPageModule {}
