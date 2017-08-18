import { Component, OnInit } from '@angular/core';
// import {UserService} from "../services/user.service";
import {Employee} from '../models/employee';
import {EmployeeService} from '../services/employee.service';
import {User} from '../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  employees: Employee[] = [];
  employee: Employee;

  constructor(private employeeService: EmployeeService) {
    this.currentUser = JSON.parse(localStorage.getItem('currUser'));
  }

  ngOnInit() {
    //this.employees = JSON.parse(localStorage.getItem('emps'));
    this.loadMe();
    this.loadAllEmployees();
    console.log('Inside Oninit' + this.employees);
  }

  private loadAllEmployees() {
     // this.employeeService.getAll().subscribe(employees => { this.employees = employees; });
    this.employeeService.getAll().subscribe(
      employees => {
        this.employees = employees;
        console.log(this.employees[0]);
      },
      error => {
        // this.alertService.error(error);
        console.log('Errrorrrrr!!!!!');
      });
  }

  private loadMe() {
    this.employeeService.getMe().subscribe(employee => { this.employee = employee; });
  }
}
