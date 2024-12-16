import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://your-backend-url.com/auth'; 
  constructor(private http: HttpClient) { }
  
  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    return this.http.post(`${this.apiUrl}/login`, body, { headers }).pipe(
      tap((response: any) => {
        // Save JWT token in local storage
        localStorage.setItem('jwtToken', response.token);
      })
    );
  }

  // Logout method
  logout(): void {
    localStorage.removeItem('jwtToken');
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    const token = localStorage.getItem('jwtToken');
    return !!token;
  }

  // Get JWT token
  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
}
