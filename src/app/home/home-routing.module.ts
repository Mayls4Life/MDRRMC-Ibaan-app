import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AnnouncementPage } from '../page/announcement/announcement.page';
import { ReportsPage } from '../page/reports/reports.page';
import { UserPage } from '../user/user.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path:'announcement',
    component: AnnouncementPage
  },
  {
    path:'reports',
    component: ReportsPage
  },
  {
    path:'user',
    component: UserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
