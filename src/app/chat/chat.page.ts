import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat } from '../chats';
import { ChatService } from '../services/chat.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  message = '';
  chat: Chat;
  members: string;
  constructor(
    private location: Location,
    private chatService: ChatService,
    private route: ActivatedRoute,
    private storage: StorageService
  ) {}

  async ngOnInit() {
    await this.getChat();
    this.members = await this.chatService.getMembers(this.chat);
  }

  public goBack() {
    this.location.back();
  }

  public submit(e) {
    e.preventDefault();
    console.log('submitted');
  }

  private async getChat() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const userId = await this.storage.get('loggedInAs');
    (await this.chatService.getChatHistory(id, userId)).subscribe(
      (c) => (this.chat = c)
    );
  }
}
