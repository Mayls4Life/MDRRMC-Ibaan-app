import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DatabaseService } from './service/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Announcement', url: '/folder/announcement', icon: 'megaphone' },
    { title: 'Report', url: '/folder/report', icon: 'bar-chart' },
    { title: 'Users', url: '/folder/users', icon: 'people' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  isLoginPage: boolean = false;
  email: string = '';

  constructor(private router: Router, private database: DatabaseService) {
    this.subscribeToRouterEvents();
  }

  private subscribeToRouterEvents(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkLoginPage();
        for (let i = 0; i < this.database.barangay.length; i++) {
          if (
            this.database.barangay[i].barangay === localStorage.getItem('user')
          ) {
            this.email = this.database.barangay[i].email;
            break;
          }
        }

        if (this.database.admin.user === localStorage.getItem('user')) {
          this.email = this.database.admin.email;
        }
      }
    });
  }

  private checkLoginPage(): void {
    // Check the current URL or any other condition to determine if it's the login page
    this.isLoginPage = this.router.url === '/login';
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
