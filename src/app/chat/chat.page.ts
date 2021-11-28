import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Chat } from '../chats';
import { ChatService } from '../services/chat.service';
import { StorageService } from '../services/storage.service';
import { USERS } from '../users';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  message = '';
  typing = false;

  userId: number;
  chatId: number;

  chat: Chat;
  members: string;
  constructor(
    private location: Location,
    private chatService: ChatService,
    private route: ActivatedRoute,
    private storage: StorageService
  ) {}

  async ngOnInit() {
    this.userId = await this.storage.get('loggedInAs');
    this.chatId = Number(this.route.snapshot.paramMap.get('id'));
    await this.getChat();
    this.members = await this.chatService.getMembers(this.chat);
    this.content.scrollToBottom(1);
  }

  public goBack() {
    this.location.back();
  }

  public async submit(e) {
    e.preventDefault();
    const user = USERS.find((u) => u.id === this.userId);
    this.chatService
      .sendMessage(
        {
          content: this.message,
          sender: user,
          time: new Date().toLocaleString(),
        },
        this.chatId
      )
      .then((res) => {
        res.subscribe((c) => (this.chat = c));
      })
      .then(() => this.content.scrollToBottom(1));
    this.message = '';
    console.log('sent');
  }

  private async getChat() {
    (await this.chatService.getChatHistory(this.chatId, this.userId)).subscribe(
      (c) => (this.chat = c)
    );
  }
}
