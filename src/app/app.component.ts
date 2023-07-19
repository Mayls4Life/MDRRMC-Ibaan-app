import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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

  constructor(private router: Router) {
    this.subscribeToRouterEvents();
  }

  private subscribeToRouterEvents(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkLoginPage();
      }
    });
  }

  private checkLoginPage(): void {
    // Check the current URL or any other condition to determine if it's the login page
    this.isLoginPage = this.router.url === '/login';
  }
}
