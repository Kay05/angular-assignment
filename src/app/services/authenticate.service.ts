import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';


@Injectable()
export class AuthenticateService {
  constructor(private http: Http, private router: Router) { }

  login(username: string, password: string) {
    // console.log('inside login auth -> ' + username + ' -> pass -> ' + password );
    return this.http.post('http://staging.tangent.tngnt.co/api-token-auth/', JSON.stringify({ username: username, password: password }), {headers: this.getHeaders()})
      .map((response: Response) => {
        // login successful if there's a token in the response
        const user = response.json();
        console.log(user);
        user.username = username;
        if (user && user.token) {
          // store user details and token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currUser', JSON.stringify(user));
        }

        return user;
      });
  }

  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currUser');
    localStorage.removeItem('empMe');
    localStorage.removeItem('emps');
    localStorage.removeItem('userMe');
    localStorage.removeItem('head');
  }
}
