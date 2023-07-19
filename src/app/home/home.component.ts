import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private database: DatabaseService) {}

  barangays: any = [];
  ngOnInit() {
    this.getReports();
  }

  ionViewTab() {
    this.getReports();
  }

  reports: any = [];

  getReports() {
    for (let i = 0; i < this.database.barangay.length; i++) {
      this.barangays.push(this.database.barangay[i]);
    }
  }
}
