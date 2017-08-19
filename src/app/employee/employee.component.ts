import { Component, OnInit } from '@angular/core';
import {Employee, User, Filter} from '../models/index';
import {EmployeeService} from '../services/employee.service';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  currentUser: User;
  employees: Employee[] = [];
  data: Filter;
  constructor(private employeeService: EmployeeService) {
  this.data = new Filter();
  this.currentUser = JSON.parse(localStorage.getItem('currUser'));
}


ngOnInit() {
    this.loadAllEmployees();
  }

  filter() {
    // console.log('data ->' + this.data.gender + ' the whole thing' + this.data);
    let x = '?';
    x = x + this.encodeUrlData(this.data);
    this.employeeService.getByFilter(x).subscribe(
      employees => {
        this.employees = employees;
        // console.log(this.employees[0]);
      },
      error => {
        // this.alertService.error(error);
        console.log('Errrorrrrr!!!!!');
      });

    console.log(x);
  }

  private encodeUrlData(data) {
    let ret = [];
    for (let d in data) {
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }
    return ret.join('&');
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
