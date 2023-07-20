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
  announcements: any = [];
  ngOnInit() {
    this.getReports();

    for (let announcement of this.database.announcement) {
      this.announcements.push(announcement);
    }
  }
  ionViewTab() {
    this.getReports();

    for (let announcement of this.database.announcement) {
      this.announcements.push(announcement);
    }
  }

  reports: any = [];

  getReports() {
    this.barangays = this.database.barangay;
    console.log(this.barangays);
  }
  selectedValue: string = 'reports';
  onSegmentChange(event: any) {
    const selectedValue = event.detail.value;
    this.selectedValue = selectedValue;
  }
}
