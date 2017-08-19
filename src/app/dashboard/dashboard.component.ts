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
  emp_fe: Employee[] = [];
  emp_be: Employee[] = [];
  emp_m: Employee[] = [];
  emp_f: Employee[] = [];
  employee: Employee;

  constructor(private employeeService: EmployeeService) {
    this.currentUser = JSON.parse(localStorage.getItem('currUser'));
  }

  ngOnInit() {
    // this.employees = JSON.parse(localStorage.getItem('emps'));
    this.loadMe();
    this.loadAllEmployees();
    this.loadPosition(1);
    this.loadPosition(2);
    this.loadGen('M');
    this.loadGen('F');
    // console.log('Inside Oninit' + this.employees);
  }

  private loadPosition(x) {
    this.employeeService.getByFilter('?position=' + x).subscribe(
      employees => {
        if (x === 1){
          this.emp_fe = employees;
        }else {
          this.emp_be = employees;
        }
        // console.log(this.employees[0]);
      },
      error => {
        // this.alertService.error(error);
        console.log('Errrorrrrr!!!!!');
      });
  }

  private loadGen(x) {
    this.employeeService.getByFilter('?gender=' + x).subscribe(
      employees => {
        if (x === 'M') {
          this.emp_m = employees;
        }else {
          this.emp_f = employees;
        }
        // console.log(this.employees[0]);
      },
      error => {
        // this.alertService.error(error);
        console.log('Errrorrrrr!!!!!');
      });
  }

  private loadAllEmployees() {
     // this.employeeService.getAll().subscribe(employees => { this.employees = employees; });
    this.employeeService.getAll().subscribe(
      employees => {
        this.employees = employees;
         // console.log(this.employees[0]);
      },
      error => {
        // this.alertService.error(error);
        console.log('Errrorrrrr!!!!!');
      });
  }

  private loadMe() {
    this.employeeService.getMe().subscribe(
      employee => {
        this.employee = employee;
        // console.log(this.employee);
      },
      error => {
        // this.alertService.error(error);
        console.log('Errrorrrrr!!!!!');
      });
  }
}
