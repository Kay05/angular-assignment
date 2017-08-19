import { Component, OnInit } from '@angular/core';
import {Employee, User} from '../models/index';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  currentUser: User;
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) {
  this.currentUser = JSON.parse(localStorage.getItem('currUser'));
}


ngOnInit() {
    this.loadAllEmployees();
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

}
