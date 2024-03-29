import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string) {
    const url = `${this.apiUrl}/auth/signin`;
    const body = { email, password };
    return this.http.post(url, body, { withCredentials: true });
  }

  signUp(email: string, password: string) {
    const url = `${this.apiUrl}/auth/signup`;
    const body = { email, password };
    return this.http.post(url, body, { withCredentials: true });
  }

  signOut() {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true,
    };

    const url = `${this.apiUrl}/auth/signout`;
    return this.http.get(url, options);
  }
}
