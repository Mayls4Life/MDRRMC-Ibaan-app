import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  public barangay = [
    {
      barangay: 'Barangay 1',
      email: 'barangay1@gmail.com',
      password: 'barangay1',
      reports: [],
    },
    {
      barangay: 'Barangay 2',
      email: 'barangay2@gmail.com',
      password: 'barangay2',
      reports: [],
    },
    {
      barangay: 'Barangay 3',
      email: 'barangay3@gmail.com',
      password: 'barangay3',
      reports: [],
    },
    {
      barangay: 'Barangay 4',
      email: 'barangay4@gmail.com',
      password: 'barangay4',
      reports: [],
    },
    {
      barangay: 'Barangay 5',
      email: 'barangay5@gmail.com',
      password: 'barangay5',
      reports: [],
    },
    {
      barangay: 'Barangay 6',
      email: 'barangay6@gmail.com',
      reports: [],
      password: 'barangay6',
    },
    {
      barangay: 'Barangay 7 ',
      email: 'barangay7@gmail.com',
      password: 'barangay7',
      reports: [    
        {
          disaster: 'eathquake',
          description: 'lorem ipsum',
          image: '../../assets/uploads/eqsample.jpg',
          date: new Date(),
        },
      ],
    },
    {
      barangay: 'Barangay 8',
      email: 'barangay8@gmail.com',
      password: 'barangay8',
      reports: [],
    },
    {
      barangay: 'Barangay 9',
      email: 'barangay9@gmail.com',
      password: 'barangay9',
      reports: [],
    },
    {
      barangay: 'Barangay 10',
      email: 'barangay10@gmail.com',
      password: 'barangay10',
      reports: [],
    },
  ];

  public announcement: any = [];

  public admin = {
    user: 'admin',
    email: 'admin@gmail.com',
    password: 'admin@password',
  };
  constructor() {}
}
