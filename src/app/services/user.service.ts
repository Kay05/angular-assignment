import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  getMe() {
    return this.http.get('http://staging.tangent.tngnt.co/api/user/me/', this.getHeaders()).map((response: Response) => response.json());
  }
  // private helper methods

  private getHeaders() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': 'Token ' + currentUser.token });
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      return new RequestOptions({ headers: headers });
    }
  }
}
