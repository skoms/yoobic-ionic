import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private store: Storage) {}

  public async set(key: string, value: any) {
    return await this.init().then((res) => res.set(key, value));
  }

  public async get(key: string): Promise<any> {
    const response = await this.init().then(async (res) => await res.get(key));
    return response;
  }

  public async remove(key: string) {
    return await this.init().then(async (res) => await res.remove(key));
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

  public async clear() {
    return await this.store.clear();
  }
}
