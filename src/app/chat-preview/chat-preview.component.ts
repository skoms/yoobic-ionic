import { Component, Input, OnInit } from '@angular/core';
import { Chat, Message } from '../chats';
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
  constructor(private storage: StorageService) {}

  async ngOnInit() {
    this.members = await this.getMembers();
    this.time = this.getMessageTime();
    this.content = this.getMessageContent();
  }

  public async getMembers(): Promise<string> {
    const id = await this.storage.get('loggedInAs');
    const members = this.chat.members.filter((member) => member.id !== id);
    return members.length > 1
      ? members.map((member) => member.name).join(', ')
      : members[0].name;
  }

  public getMessageTime(): string {
    return this.getLastMessage().time;
  }

  public getMessageContent(): string {
    const lastMessage = this.getLastMessage();
    const sender = lastMessage.sender.name;
    const content =
      lastMessage.content.length > 30
        ? lastMessage.content.slice(0, 30) + '...'
        : lastMessage.content;

    return `${sender}: ${content}`;
  }

  private getLastMessage(): Message {
    return this.chat.messages[this.chat.messages.length - 1];
  }
}
