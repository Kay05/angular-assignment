import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Angular App';
  showHeader = true;
  constructor(private router: Router) {}

  ngOnInit() {
    // listening to routing navigation event
    this.router.events.subscribe(event => this.modifyHeader(event));
  }

  modifyHeader(location) {
    this.showHeader = (location.url !== '/login' && location.url !== '/' && localStorage.getItem('head') === '1');
  }
}
