import { Component, OnInit } from '@angular/core';
import {Employee, User, Filter} from '../models/index';
import {EmployeeService, AlertService} from '../services/index';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  currentUser: User;
  employees: Employee[] = [];
  data: Filter;
  constructor(private employeeService: EmployeeService, private alertService: AlertService) {
  this.data = new Filter();
  this.currentUser = JSON.parse(localStorage.getItem('currUser'));
}


ngOnInit() {
    this.loadAllEmployees();
  }

  filter() {
    let x = '?';
    x = x + this.encodeUrlData(this.data);
    this.employeeService.getByFilter(x).subscribe(
      employees => {
        this.employees = employees;
        this.alertService.success('Search Complete');

      },
      error => {
        if (error._body) {
          this.alertService.error(error._body);
        }else {
          console.log(error);
        }
      });

    console.log(x);
  }

  private encodeUrlData(data) {
    let ret = [];
    for (let d in data) {
      if (data[d] !== null) {
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
      }
    }
    return ret.join('&');
  }

  private loadAllEmployees() {
    this.employeeService.getAll().subscribe(
      employees => {
        this.employees = employees;
      },
      error => {
        if (error._body) {
          this.alertService.error(error._body);
        }else {
          console.log(error);
        }
      });
  }

}
