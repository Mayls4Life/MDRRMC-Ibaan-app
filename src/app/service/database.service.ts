import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  public barangay = [
    {
      barangay: 'Barangay1',
      email: 'barangay1@gmail.com',
      password: 'barangay1',
      reports: [],
    },
    {
      barangay: 'Barangay2',
      email: 'barangay2@gmail.com',
      password: 'barangay2',
      reports: [],
    },
    {
      barangay: 'Barangay3',
      email: 'barangay3@gmail.com',
      password: 'barangay3',
      reports: [],
    },
    {
      barangay: 'Barangay4',
      email: 'barangay4@gmail.com',
      password: 'barangay4',
      reports: [],
    },
    {
      barangay: 'Barangay5',
      email: 'barangay5@gmail.com',
      password: 'barangay5',
      reports: [],
    },
    {
      barangay: 'Barangay6',
      email: 'barangay6@gmail.com',
      reports: [],
      password: 'barangay6',
    },
    {
      barangay: 'Barangay7',
      email: 'barangay7@gmail.com',
      password: 'barangay7',
      reports: [],
    },
    {
      barangay: 'Barangay8',
      email: 'barangay8@gmail.com',
      password: 'barangay8',
      reports: [],
    },
    {
      barangay: 'Barangay9',
      email: 'barangay9@gmail.com',
      password: 'barangay9',
      reports: [],
    },
    {
      barangay: 'Barangay10',
      email: 'barangay10@gmail.com',
      password: 'barangay10',
      reports: [],
    },
  ];

  constructor() {}
}
