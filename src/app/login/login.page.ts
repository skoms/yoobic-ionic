import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private location: Location, private auth: AuthService) {}

  async ngOnInit() {
    await this.goIfLoggedIn();
  }

  private async goIfLoggedIn(): Promise<void> {
    if (await this.auth.getLoginStatus()) {
      this.location.go('/dashboard');
    }
  }
}
