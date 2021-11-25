import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage: Storage | null = null;
  constructor(private store: Storage) {
    this.init();
  }

  public set(key: string, value: any) {
    this.storage?.set(key, value);
  }

  public async get(key: string): Promise<string> {
    const res = await this.storage?.get(key);
    return res;
  }

  private async init() {
    const storage = await this.store.create();
    this.storage = storage;
  }
}
