import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ReportComponent } from '../report/report.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [FolderPage, ReportComponent, HomeComponent],
})
export class FolderPageModule {}
