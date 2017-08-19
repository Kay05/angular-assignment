import { Component, OnInit } from '@angular/core';
import {Employee, User} from '../models/index';
import {EmployeeService} from '../services/index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  emp: Employee;
  currentUser: User;

  constructor(private employeeService: EmployeeService) {
    this.currentUser = JSON.parse(localStorage.getItem('currUser'));
  }

  ngOnInit() {
    this.loadMe();
  }

  private loadMe() {
    this.employeeService.getMe().subscribe(
      employee => {
        this.emp = employee;
        console.log(this.emp);
      },
      error => {
        // this.alertService.error(error);
        console.log('Errrorrrrr!!!!!');
      });
  }

}
