import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storage: StorageService, private router: Router) {}

  public async initStorage() {
    await this.storage.init();
  }

  public async setLoginStatus(status: boolean): Promise<void> {
    return await this.storage.set('loggedIn', status);
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
    this.storage.set('loggedInAs', 1); // Logs in as User ID 1 for simplicity
    this.setLoginStatus(true).then(() =>
      this.router.navigateByUrl('/dashboard/missions')
    );
  }

  public signOut(): void {
    this.storage.clear().then(() => this.router.navigateByUrl('/login'));
  }

  private validatePassword(password: string): boolean {
    return /^[A-Za-z0-9]{8,}$/.test(password);
  }

  private validateEmail(email: string): boolean {
    return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email);
  }
}
