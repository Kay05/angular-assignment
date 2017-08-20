import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  currentUser: User;
  p: any;
  constructor(private userService: UserService, location: Location, router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currUser'));
    router.events.subscribe((val) => {
      if (location.path() !== '') {
        this.p = location.path();
      } else {
        this.p = '/dashboard';
      }
    });
  }

  ngOnInit() {
    this.loadMe();
  }

  private loadMe() {
    this.userService.getMe().subscribe(
      user => {
        this.user = user;
        console.log(this.user);
      },
      error => {
        console.log('Errrorrrrr!!!!!');
      });
  }

}
