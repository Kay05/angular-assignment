import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  currentUser: User;
  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currUser'));
  }

  ngOnInit() {
    this.loadMe();
  }

  private loadMe() {
    this.userService.getMe().subscribe(
      user => {
        this.user = user;
        console.log(user);
      },
      error => {
        // this.alertService.error(error);
        console.log('Errrorrrrr!!!!!');
      });
  }

}
