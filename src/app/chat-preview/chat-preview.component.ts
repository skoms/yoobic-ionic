import { Component, Input, OnInit } from '@angular/core';
import { Chat, Message } from '../chats';
import { ChatService } from '../services/chat.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.scss'],
})
export class ChatPreviewComponent implements OnInit {
  @Input() chat: Chat;
  members: string;
  time: string;
  content: string;
  constructor(private chatService: ChatService) {}

  async ngOnInit() {
    this.members = await this.chatService.getMembers(this.chat);
    this.time = this.chatService.getLastMessageTime(this.chat);
    this.content = this.chatService.getLastMessageContent(this.chat);
  }
}
