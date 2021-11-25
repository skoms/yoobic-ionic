import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private store: Storage) {}

  public async set(key: string, value: any) {
    await this.init().then((res) => res.set(key, value));
  }

  public async get(key: string): Promise<string> {
    const response = await this.init().then(async (res) => await res.get(key));
    return response;
  }

  public async enumerate() {
    await this.init().then((res) =>
      res.forEach((value, key, index) => {
        console.log(`ITEM - ${key} = ${value} [${index}]`);
      })
    );
  }

  public async init() {
    return await this.store.create();
  }
}
