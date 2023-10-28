import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLoggedIn = new BehaviorSubject(false);
  constructor(private router: Router) {}

  login(email: string, password: string) {
    if (email === 'adhyyan321@gmail.com' && password === 'root') {
      this.isLoggedIn.next(true);
      return true;
    }
    return false;
  }
  logout() {
    this.isLoggedIn.next(false);
    this.router.navigate(['login']);
  }
  getStatus() {
    return this.isLoggedIn;
  }
}
