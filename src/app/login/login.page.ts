import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../service/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private database: DatabaseService, private router: Router) {}

  ngOnInit() {}

  email = '';
  password = '';
  error = '';

  login() {
    if (this.email != '' && this.password != '') {
      for (let i = 0; i < this.database.barangay.length; i++) {
        if (
          this.email == this.database.barangay[i].email &&
          this.password == this.database.barangay[i].password
        ) {
          localStorage.setItem('user', this.database.barangay[i].barangay);
          this.router.navigate(['/folder/home']);
          break;
        } else {
          this.error = 'Incorrect email or password';
        }
      }
      if (
        this.database.admin.email == this.email &&
        this.database.admin.password == this.password
      ) {
        localStorage.setItem('user', 'admin');
        this.router.navigate(['/folder/home']);
      } else {
        this.error = 'Incorrect email or password';
      }
    } else {
      this.error = 'Fill out missing values';
    }
    console.log(this.error);
  }

  showPassword: boolean = false; // Initialize the variable as false

  // Other methods for login, etc.

  // Method to toggle the showPassword variable
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
