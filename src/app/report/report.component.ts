import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../service/database.service';

interface Report {
  disaster: string;
  description: string;
  image: string;
  date: Date;
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  selectedDisaster: string = '';
  description: string = '';

  file: any;

  getFile(event: any) {
    this.file = event.target.files[0];
    console.log('file', this.file);
  }

  constructor(private http: HttpClient, private database: DatabaseService) {}

  ngOnInit() {}

  submitData() {
    let formData = new FormData();
    formData.set('file', this.file);
    this.http
      .post('http://localhost:3001/upload/uploadFiles', formData)
      .subscribe((response) => {});

    const report: Report = {
      disaster: this.selectedDisaster,
      description: this.description,
      image: '../../assets/uploads/' + this.file.name,
      date: new Date(),
    };

    for (let i = 0; i < this.database.barangay.length; i++) {
      const barangay = this.database.barangay[i];
      if (!barangay.reports) {
        barangay.reports = [];
      }
      (barangay.reports as Report[]).unshift(report);
    }
    console.log(this.database.barangay);
  }
}
