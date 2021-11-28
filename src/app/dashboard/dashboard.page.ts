import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  darkMode: boolean;
  constructor(
    private auth: AuthService,
    private menu: MenuController,
    private router: Router,
    private storage: StorageService
  ) {}

  async ngOnInit() {
    await this.ensureLogin();
    await this.checkForDarkMode();
    this.prefersDark.addEventListener('change', (e) =>
      this.toggleDarkMode(e.matches)
    );
  }

  public async checkForDarkMode() {
    const darkMode = await this.storage.get('darkMode');
    if (darkMode) {
      this.toggleDarkMode(darkMode);
      return;
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark.matches) {
      this.toggleDarkMode(prefersDark.matches);
      return;
    }
  }

  public async toggleDarkMode(isActive: boolean = this.darkMode) {
    this.darkMode = isActive;
    document.body.classList.toggle('dark', isActive);
    await this.storage.set('darkMode', isActive);
  }

  public goTo(path: string, isMenu: boolean = true) {
    this.router.navigateByUrl(path);
    if (isMenu) {
      this.menu.close('side-menu');
    }
  }

  public signOut() {
    this.auth.signOut();
    this.menu.close('side-menu');
  }

  private async ensureLogin() {
    const loggedIn = await this.auth.getLoginStatus();
    if (loggedIn) {
      return;
    }
    this.router.navigateByUrl('/login');
  }
}
