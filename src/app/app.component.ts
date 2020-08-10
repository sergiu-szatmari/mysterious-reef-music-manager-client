import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isDarkMode: boolean;
  isAdmin: boolean;

  // isDarkMode = false;
  // isAdmin = false;

  constructor() {
    console.log(environment.secretMessage);
  }

  ngOnInit(): void {
    this.isDarkMode = JSON.parse(sessionStorage.getItem('isDarkMode'));
    this.isAdmin = JSON.parse(sessionStorage.getItem('isAdmin'));
  }

  onDarkModeToggle(isDarkMode: boolean): void {
    sessionStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }

  onAdminToggle(isAdmin: boolean): void {
    sessionStorage.setItem('isAdmin', JSON.stringify(isAdmin));
  }
}
