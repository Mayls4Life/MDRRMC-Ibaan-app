import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsPage } from './reports.page';
import { HomePage } from 'src/app/home/home.page';
import { AnnouncementPage } from '../announcement/announcement.page';
import { UserPage } from 'src/app/user/user.page';

const routes: Routes = [
  {
    path: '',
    component: ReportsPage
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'announcement',
    component: AnnouncementPage
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
export class ReportsPageRoutingModule {}
