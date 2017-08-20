import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

@Injectable()
export class EmployeeService {
  constructor(private http: Http) { }

  getAll() {
    return this.http.get('http://staging.tangent.tngnt.co/api/employee/', this.getHeaders()).map((response: Response) => {
      const emps = response.json();
      /*if (emps) {
        localStorage.setItem('emps', JSON.stringify(emps));
      }*/
      return emps;
    });
  }

  getByFilter(filter: string) {
    if (filter === '?') {
      filter = '';
    }
    return this.http.get('http://staging.tangent.tngnt.co/api/employee/' + filter, this.getHeaders()).map((response: Response) => {
      const fil = response.json();
      /*if (fil) {
        // store filtered employees details and token in local storage
        localStorage.setItem('filtered', JSON.stringify(fil));
      }*/
      return fil;
    });
  }

  getMe() {
    return this.http.get('http://staging.tangent.tngnt.co/api/employee/me/', this.getHeaders()).map((response: Response) => {
      const empMe = response.json();
      /*if (empMe) {
        localStorage.setItem('empMe', JSON.stringify(empMe));
      }*/
      return empMe;
    });
  }

  // private helper methods

  private getHeaders() {
    // create authorization header with token
    const currentUser = JSON.parse(localStorage.getItem('currUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': 'Token ' + currentUser.token });
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      return new RequestOptions({ headers: headers });
    }
  }
}
