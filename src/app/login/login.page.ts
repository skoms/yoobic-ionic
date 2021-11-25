import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  async ngOnInit() {
    await this.auth.initStorage();
    await this.goIfLoggedIn();
  }

  public signIn(email: string, password: string) {
    this.auth.signIn(email, password);
  }

  private async goIfLoggedIn(): Promise<void> {
    await this.auth.getLoginStatus().then((res) => {
      if (res) {
        this.router.navigateByUrl('/dashboard/missions');
      }
    });
  }
}
