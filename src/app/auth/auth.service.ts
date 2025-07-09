import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = true; // заменить на false

  isAuthenticated() {
    return this.isAuth;
  }
}
