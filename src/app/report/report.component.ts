import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, ModalController } from '@ionic/angular'; // Import the AlertController and ModalController
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
  user = localStorage.getItem('user');

  //get file
  getFile(event: any) {
    this.file = event.target.files[0];
    console.log('file', this.file);
  }
  constructor(
    private http: HttpClient,
    private alertController: AlertController, // Inject the ModalController
    private database: DatabaseService
  ) {}
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  ngOnInit() {
    for (let barangay of this.database.barangay) {
      if (localStorage.getItem('user') === barangay.barangay) {
        this.barangays.push(barangay);
      }
    }
  }
  //submit data function
  async submitData() {
    //get the inserted file
    let formData = new FormData();
    formData.set('file', this.file);

    //save the file
    this.http
      .post('http://localhost:3001/upload/uploadFiles', formData)
      .subscribe((response) => {});

    let report = {
      disaster: this.selectedDisaster,
      description: this.description,
      image: '../../assets/uploads/' + this.file.name,
      date: new Date(),
    };

    const alert = await this.alertController.create({
      header: 'Confirm Submission',
      message: 'Are you sure you want to submit the report?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // User canceled the submission
            console.log('Report submission canceled.');
          },
        },
        {
          text: 'Submit',
          handler: async () => {
            // Show a success alert modal after submitting the report
            const successAlert = await this.alertController.create({
              header: 'Success',
              message: 'The report has been successfully submitted.',
              buttons: ['OK'],
            });
            await successAlert.present();

            // ... Continue with the report submission logic ...
            for (let i = 0; i < this.database.barangay.length; i++) {
              if (
                localStorage.getItem('user') ==
                this.database.barangay[i].barangay
              ) {
                this.database.barangay[i].reports.push(report);
              }
            }

            console.log(this.database.barangay);
          },
        },
      ],
    });

    await alert.present();
  }

  barangays: any = [];
  reports: any = [];

  getReports(event: any) {
    const labels = Array.from(document.querySelectorAll('ion-card'));
    labels.forEach((label) => {
      const item = label.parentElement;
      if (item == null || label.textContent == null) {
        return;
      }
      if (label.textContent.toLowerCase().indexOf(event.target.value) > -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  deleteReport(barangay: any, report: any) {
    const index = barangay.reports.indexOf(report);
    if (index > -1) {
      // Show an alert modal to confirm the deletion
      this.showDeleteConfirmationAlert(barangay, index);
    }
  }

  async showDeleteConfirmationAlert(barangay: any, index: number) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: 'Are you sure you want to delete this report?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // User canceled the deletion
            console.log('Deletion canceled.');
          },
        },
        {
          text: 'Delete',
          handler: () => {
            // Remove the report from the barangay's reports array
            barangay.reports.splice(index, 1);
            console.log('Report deleted.');
          },
        },
      ],
    });

    await alert.present();
  }
}
