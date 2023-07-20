import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, ModalController } from '@ionic/angular'; // Import the AlertController and ModalController
import { DatabaseService } from '../service/database.service';

interface Announcement {
  subject: string;
  description: string;
  image: string;
  date: Date;
}

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent implements OnInit {
  subject: string = '';
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

  //submit data function
  async submitData() {
    //get the inserted file
    let formData = new FormData();
    formData.set('file', this.file);

    //save the file
    this.http
      .post('http://localhost:3001/upload/uploadFiles', formData)
      .subscribe((response) => {});

    let announcement = {
      subject: this.subject,
      description: this.description,
      image: '../../assets/uploads/' + this.file.name,
      date: new Date(),
    };

    const alert = await this.alertController.create({
      header: 'Confirm Submission',
      message: 'Are you sure you want to submit the announcement?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // User canceled the submission
            console.log('announcement submission canceled.');
          },
        },
        {
          text: 'Submit',
          handler: async () => {
            // Show a success alert modal after submitting the announcement
            const successAlert = await this.alertController.create({
              header: 'Success',
              message: 'The announcement has been successfully submitted.',
              buttons: ['OK'],
            });
            await successAlert.present();

            this.database.announcement.push(announcement);
            this.announcements = this.database.announcement;
            console.log(this.database.announcement);
          },
        },
      ],
    });

    await alert.present();
  }

  announcements: any = [];

  getAnnouncements(event: any) {
    const labels = Array.from(document.querySelectorAll('ion-card'));
    console.log(labels);
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
  ngOnInit() {
    for (let announcement of this.database.announcement) {
      this.announcements.push(announcement);
    }
  }
  async deleteAnnouncement(index: number) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: 'Are you sure you want to delete this announcement?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // User clicked the cancel button, do nothing
          },
        },
        {
          text: 'Delete',
          handler: () => {
            // User clicked the delete button, perform the deletion
            this.announcements.splice(index, 1);
          },
        },
      ],
    });

    await alert.present();
  }
}
