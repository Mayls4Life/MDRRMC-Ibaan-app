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
          this.router.navigate(['/folder/inbox']);
          break;
        } else {
          this.error = 'Incorrect email or password';
        }
      }
    } else {
      this.error = 'Fill out missing values';
    }
    console.log(this.error);
  }
}