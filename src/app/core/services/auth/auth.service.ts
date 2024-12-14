// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated: BehaviorSubject<boolean>;

  constructor() {
    // Initialize the BehaviorSubject based on the value in localStorage
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    const isAuthenticated = storedAuthStatus ? JSON.parse(storedAuthStatus) : false;
    this._isAuthenticated = new BehaviorSubject<boolean>(isAuthenticated);
  }

  get isAuthenticated() {
    return this._isAuthenticated.asObservable();
  }

  login() {
    // Set authentication status to true and persist in localStorage
    this._isAuthenticated.next(true);
    localStorage.setItem('isAuthenticated', 'true');
  }

  logout() {
    // Set authentication status to false and remove from localStorage
    this._isAuthenticated.next(false);
    localStorage.removeItem('isAuthenticated');
  }
}

