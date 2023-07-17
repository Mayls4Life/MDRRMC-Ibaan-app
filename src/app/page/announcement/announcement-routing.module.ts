import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnouncementPage } from './announcement.page';
import { HomePage } from 'src/app/home/home.page';
import { ReportsPage } from '../reports/reports.page';
import { UserPage } from 'src/app/user/user.page';
import { Component, OnInit } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: AnnouncementPage
  },
  {
    path:'home',
    component: HomePage
  },
  {
    path:'report',
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
export class AnnouncementPageRoutingModule {}

