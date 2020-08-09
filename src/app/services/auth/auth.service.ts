import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /** Checks for the 'isAdmin' session storage variable (true | false) */
  isUserAuthorized(): boolean {
    return JSON.parse(sessionStorage.getItem('isAdmin'));
  }
}
