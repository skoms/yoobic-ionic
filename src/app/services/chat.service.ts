import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Chat, CHATS } from '../chats';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  chatHistories: Chat[] = [];
  constructor(private storage: StorageService) {}

  public async getChatHistories(id: number): Promise<Observable<Chat[]>> {
    return await this.storage
      .get('chats')
      .then((res: Chat[]) => {
        if (res) {
          this.chatHistories = this.getChatsIfMember(res, id);
        } else {
          this.chatHistories = this.getChatsIfMember(CHATS, id);
          this.storage.set('chats', this.chatHistories);
        }
      })
      .then(() => of(this.chatHistories));
  }

  private getChatsIfMember(chats: Chat[], id: number): Chat[] {
    return chats.filter((chat) =>
      chat.members.find((member) => member.id === id)
    );
  }
}
