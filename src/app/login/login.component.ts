import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticateService, AlertService} from '../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Angular App';
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticateService,
    private alertService: AlertService) {}

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    localStorage.setItem('head', '0');

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  login(event, user, pass) {
    // event.preventDefault();
    this.authenticationService.login(user, pass)
      .subscribe(
        data => {
          localStorage.setItem('head', '1');
          this.router.navigate([this.returnUrl]);
          console.log('Success => data' + data);
        },
        error => {
          if (error.status === 400) {
            this.alertService.error('Unable to log in with provided credentials');
          }else {
            this.alertService.error('Please check your internet');
          console.log(error);
          }
          this.loading = false;
        });
  }
}
