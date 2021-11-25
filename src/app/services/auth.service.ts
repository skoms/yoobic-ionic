import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storage: StorageService) {}

  public async initStorage() {
    await this.storage.init();
  }

  public setLoginStatus(status: boolean) {
    this.storage.set('loggedIn', status);
  }

  public async getLoginStatus(): Promise<boolean> {
    const res = await this.storage.get('loggedIn');
    return ['true', true].includes(res);
  }

  public signIn(email: string, password: string): void {
    if (!this.validateEmail(email)) {
      return;
    }
    if (!this.validatePassword(password)) {
      return;
    }
    this.setLoginStatus(true);
  }

  private validatePassword(password: string): boolean {
    return /test/.test(password);
  }

  private validateEmail(email: string): boolean {
    return /test/.test(email);
  }
}
