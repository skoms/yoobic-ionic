import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Chat, CHATS, Message } from '../chats';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  chatHistories: Chat[] = [];
  constructor(private storage: StorageService, private router: Router) {}

  public async getChatHistory(
    chatId: number,
    userId: number
  ): Promise<Observable<Chat | null>> {
    const chats = await this.storage.get('chats').then((res: Chat[]) => {
      if (res) {
        return this.getChatsIfMember(res, userId);
      } else {
        return this.getChatsIfMember(CHATS, userId);
      }
    });
    const chat = chats.find((c) => c.id === chatId);
    return of(chat ? chat : null);
  }

  public async sendMessage(
    msg: Message,
    chatId: number
  ): Promise<Observable<Chat>> {
    await this.getChatHistories(msg.sender.id);
    console.log(this.chatHistories);
    this.chatHistories = this.chatHistories.map((c) => {
      if (c.id !== chatId) {
        return c;
      }
      c.messages.push(msg);
      return c;
    });
    console.log(this.chatHistories);
    await this.saveChats(this.chatHistories);
    const chat = await this.getChatHistory(chatId, msg.sender.id);
    return chat;
  }

  public async getChatHistories(userId: number): Promise<void> {
    return await this.storage.get('chats').then((res: Chat[]) => {
      if (res) {
        this.chatHistories = this.getChatsIfMember(res, userId);
      } else {
        this.chatHistories = this.getChatsIfMember(CHATS, userId);
        this.saveChats(this.chatHistories);
      }
    });
  }

  public async getMembers(chat: Chat): Promise<string> {
    const id = await this.storage.get('loggedInAs');
    const members = chat.members.filter((member) => member.id !== id);
    return members.length > 1
      ? members.map((member) => member.name).join(', ')
      : members[0].name;
  }

  public getLastMessageTime(chat: Chat): string {
    return this.getLastMessage(chat).time;
  }

  public getLastMessageContent(chat: Chat): string {
    const lastMessage = this.getLastMessage(chat);
    const sender = lastMessage.sender.name;
    const content =
      lastMessage.content.length > 30
        ? lastMessage.content.slice(0, 30) + '...'
        : lastMessage.content;

    return `${sender}: ${content}`;
  }

  private getLastMessage(chat: Chat): Message {
    return chat.messages[chat.messages.length - 1];
  }

  private getChatsIfMember(chats: Chat[], userId: number): Chat[] {
    return chats.filter((chat) =>
      chat.members.find((member) => member.id === userId)
    );
  }

  private async saveChats(chats: Chat[]) {
    await this.storage.set('chats', chats);
  }
}
