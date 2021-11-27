import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-active-chats',
  templateUrl: './active-chats.page.html',
  styleUrls: ['./active-chats.page.scss'],
})
export class ActiveChatsPage implements OnInit {
  constructor(
    private location: Location,
    public chatService: ChatService,
    private storage: StorageService
  ) {}

  async ngOnInit() {
    const id = await this.storage.get('loggedInAs');
    this.chatService.getChatHistories(id);
  }

  public goBack() {
    this.location.back();
  }
}
