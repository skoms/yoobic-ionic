import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor(
    private auth: AuthService,
    private menu: MenuController,
    private router: Router
  ) {}

  ngOnInit() {}

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
}
